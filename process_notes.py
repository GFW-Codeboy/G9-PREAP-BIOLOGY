#!/usr/bin/env python3
"""
Biology Notes Processor
Extracts text from images and organizes content
"""
import os
import json
from pathlib import Path

# Get all image files
notes_dir = Path(__file__).parent
image_files = sorted(notes_dir.glob("*.jpg"))

print(f"Found {len(image_files)} image files")
print("\nImage inventory:")
for img in image_files:
    size_mb = img.stat().st_size / (1024 * 1024)
    print(f"  {img.name}: {size_mb:.2f} MB")

# Create output directory structure
output_dir = notes_dir / "organized_notes"
output_dir.mkdir(exist_ok=True)

print(f"\nOutput directory created: {output_dir}")
print("\nNext step: OCR processing will be implemented")
