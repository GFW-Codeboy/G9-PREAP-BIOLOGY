#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Organize and rename image files
"""
import shutil
from pathlib import Path

def organize_images():
    """Move images to a subfolder and rename them"""
    notes_dir = Path(__file__).parent

    # Create images folder
    images_dir = notes_dir / "original_images"
    images_dir.mkdir(exist_ok=True)

    # Find all JPG files in main directory
    image_files = sorted([f for f in notes_dir.glob("*.jpg") if f.parent == notes_dir])

    print("=" * 60)
    print("Image Organizer - Biology Notes")
    print("=" * 60)
    print(f"\nFound {len(image_files)} images to organize\n")

    if len(image_files) == 0:
        print("No images found in main directory.")
        print("They might already be organized!")
        return

    # Move and rename each image
    for idx, img_file in enumerate(image_files, 1):
        # New name: biology_note_001.jpg, biology_note_002.jpg, etc.
        new_name = f"biology_note_{idx:03d}.jpg"
        new_path = images_dir / new_name

        # Move file
        shutil.move(str(img_file), str(new_path))
        print(f"[{idx:3d}/{len(image_files)}] {img_file.name}")
        print(f"         -> {new_name}")

    print(f"\n" + "=" * 60)
    print("Organization Complete!")
    print("=" * 60)
    print(f"\nAll {len(image_files)} images moved to: original_images/")
    print("Renamed as: biology_note_001.jpg to biology_note_{:03d}.jpg".format(len(image_files)))
    print("\nYour working directory is now clean!")

if __name__ == "__main__":
    try:
        organize_images()
    except Exception as e:
        print(f"\nError: {e}")
        import traceback
        traceback.print_exc()
