#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
OCR Processor for Biology Notes - Fixed Encoding
Uses multiple approaches to extract text from images
"""
import os
import sys
import json
from pathlib import Path
from PIL import Image
import base64

def check_dependencies():
    """Check what OCR tools are available"""
    available_tools = []

    # Check for pytesseract
    try:
        import pytesseract
        available_tools.append('pytesseract')
    except ImportError:
        pass

    # Check for easyocr
    try:
        import easyocr
        available_tools.append('easyocr')
    except ImportError:
        pass

    # Check for PIL
    try:
        from PIL import Image
        available_tools.append('PIL')
    except ImportError:
        pass

    return available_tools

def extract_text_tesseract(image_path):
    """Extract text using Tesseract OCR"""
    try:
        import pytesseract
        from PIL import Image

        img = Image.open(image_path)
        # Try both English and Chinese
        text = pytesseract.image_to_string(img, lang='chi_sim+eng')
        return text
    except Exception as e:
        return f"Error with Tesseract: {str(e)}"

def extract_text_easyocr(image_path):
    """Extract text using EasyOCR"""
    try:
        import easyocr
        reader = easyocr.Reader(['ch_sim', 'en'])
        result = reader.readtext(str(image_path))
        text = '\n'.join([item[1] for item in result])
        return text
    except Exception as e:
        return f"Error with EasyOCR: {str(e)}"

def create_image_report(image_path):
    """Create a report about the image"""
    try:
        img = Image.open(image_path)
        width, height = img.size
        mode = img.mode
        format_name = img.format

        report = f"""Image Information:
Filename: {image_path.name}
Size: {width}x{height}
Mode: {mode}
Format: {format_name}
File size: {image_path.stat().st_size / (1024*1024):.2f} MB

Status: Ready for OCR processing
This image needs to be processed with OCR software.
"""
        return report
    except Exception as e:
        return f"Error reading image: {str(e)}"

def process_all_images():
    """Process all images in the directory"""
    notes_dir = Path(__file__).parent
    image_files = sorted(notes_dir.glob("*.jpg"))

    print("=" * 60)
    print("Biology Notes OCR Processor")
    print("=" * 60)
    print(f"\nFound {len(image_files)} images to process\n")

    # Check available tools
    available = check_dependencies()
    print("Available OCR tools:", ', '.join(available) if available else "None (manual processing required)")
    print()

    # Create output directory
    output_dir = notes_dir / "extracted_text"
    output_dir.mkdir(exist_ok=True)

    # Process each image
    results = []
    for idx, img_path in enumerate(image_files, 1):
        print(f"[{idx}/{len(image_files)}] Processing: {img_path.name}")

        output_file = output_dir / f"{img_path.stem}.txt"

        # Try to extract text
        extracted_text = None
        method = "none"

        if 'pytesseract' in available:
            extracted_text = extract_text_tesseract(img_path)
            method = "tesseract"
        elif 'easyocr' in available:
            extracted_text = extract_text_easyocr(img_path)
            method = "easyocr"
        else:
            extracted_text = create_image_report(img_path)
            method = "manual_required"

        # Save extracted text
        output_file.write_text(
            f"# Source: {img_path.name}\n"
            f"# Method: {method}\n"
            f"# Processed: {idx}/{len(image_files)}\n\n"
            f"{extracted_text}\n",
            encoding='utf-8'
        )

        results.append({
            "image": img_path.name,
            "output": output_file.name,
            "method": method,
            "status": "processed"
        })

        print(f"  [OK] Saved to: {output_file.name}")

    # Save processing report
    report_file = output_dir / "_processing_report.json"
    with open(report_file, 'w', encoding='utf-8') as f:
        json.dump({
            "total_images": len(image_files),
            "available_tools": available,
            "results": results
        }, f, indent=2, ensure_ascii=False)

    print(f"\n[OK] Processing complete!")
    print(f"[OK] Output directory: {output_dir}")
    print(f"[OK] Report saved: {report_file}")

    if not available:
        print("\n[WARNING] No OCR tools available. Manual processing required.")
        print("   Install: pip install pytesseract easyocr pillow")

    return results

if __name__ == "__main__":
    try:
        process_all_images()
    except Exception as e:
        print(f"\nError: {str(e)}")
        sys.exit(1)
