#!/usr/bin/env python3
"""
Master Script - Biology Notes Organizer
Runs all processing steps in sequence
"""
import sys
import subprocess
from pathlib import Path
from datetime import datetime

def print_header(text):
    """Print formatted header"""
    print("\n" + "=" * 70)
    print(f"  {text}")
    print("=" * 70 + "\n")

def run_script(script_name, description):
    """Run a Python script and handle errors"""
    print(f"▶ {description}")
    print(f"  Running: {script_name}")

    try:
        result = subprocess.run(
            [sys.executable, script_name],
            capture_output=True,
            text=True,
            encoding='utf-8',
            errors='replace'
        )

        if result.stdout:
            print(result.stdout)

        if result.returncode != 0:
            print(f"⚠️  Warning: {script_name} completed with status {result.returncode}")
            if result.stderr:
                print(f"Error output: {result.stderr}")
            return False

        return True
    except Exception as e:
        print(f"❌ Error running {script_name}: {str(e)}")
        return False

def main():
    """Main orchestration function"""
    notes_dir = Path(__file__).parent

    print_header("Biology Notes Organizer - Complete Workflow")
    print(f"Working directory: {notes_dir}")
    print(f"Started: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")

    # Count images
    image_files = list(notes_dir.glob("*.jpg"))
    print(f"\n📸 Found {len(image_files)} image files to process")

    # Step 1: OCR Processing
    print_header("Step 1: OCR Text Extraction")
    ocr_success = run_script("ocr_processor.py", "Extracting text from images")

    # Step 2: Content Organization
    print_header("Step 2: Content Organization")
    organize_success = run_script("extract_and_organize.py", "Organizing extracted content")

    # Step 3: Generate Word Document
    print_header("Step 3: Generate Word Document")
    docx_success = run_script("generate_docx.py", "Creating DOCX study guide")

    # Step 4: Prepare Deployment Package
    print_header("Step 4: Prepare Website Deployment")
    deploy_success = run_script("deploy.py", "Creating deployment package")

    # Summary
    print_header("Processing Complete - Summary")

    results = {
        "OCR Extraction": ocr_success,
        "Content Organization": organize_success,
        "Word Document": docx_success,
        "Website Deployment": deploy_success
    }

    print("Results:")
    for step, success in results.items():
        status = "✓" if success else "⚠️"
        print(f"  {status} {step}")

    print("\n" + "=" * 70)
    print("Next Steps:")
    print("=" * 70)

    print("\n1. 📄 Check extracted text:")
    print("   → extracted_text/ folder")

    print("\n2. 📝 Review Word document:")
    print("   → Biology_Study_Guide.docx or Biology_Study_Guide.md")

    print("\n3. 🌐 Deploy website:")
    print("   → deploy_package/ folder")
    print("   → Read DEPLOYMENT_GUIDE.md for instructions")

    print("\n4. ✏️  Manual review needed:")
    print("   → Check extracted_text/ for unclear sections")
    print("   → Look for [needs review] markers")
    print("   → Update script.js with actual content")

    print("\n" + "=" * 70)
    print(f"Completed: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print("=" * 70 + "\n")

    # Check for common issues
    if not any(results.values()):
        print("⚠️  Note: Some dependencies may be missing.")
        print("   Install with: pip install pytesseract easyocr pillow python-docx")
        print("   Or proceed with manual OCR processing.")

if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\n\n⚠️  Process interrupted by user")
        sys.exit(1)
    except Exception as e:
        print(f"\n❌ Fatal error: {str(e)}")
        import traceback
        traceback.print_exc()
        sys.exit(1)
