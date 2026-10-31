#!/usr/bin/env python3
"""
Generate Word Document from Biology Notes
Creates a formatted DOCX study guide
"""
import json
from pathlib import Path
from datetime import datetime

def check_docx_library():
    """Check if python-docx is available"""
    try:
        from docx import Document
        from docx.shared import Inches, Pt, RGBColor
        from docx.enum.text import WD_ALIGN_PARAGRAPH
        return True
    except ImportError:
        return False

def create_study_guide_docx():
    """Create a Word document study guide"""

    if not check_docx_library():
        print("⚠️  python-docx not installed")
        print("   Install with: pip install python-docx")
        print("   Creating template markdown instead...")
        create_markdown_template()
        return

    from docx import Document
    from docx.shared import Inches, Pt, RGBColor
    from docx.enum.text import WD_ALIGN_PARAGRAPH

    # Create document
    doc = Document()

    # Set document properties
    doc.core_properties.title = "Biology Notes - Organized Study Guide"
    doc.core_properties.author = "Biology Study Notes"
    doc.core_properties.created = datetime.now()

    # Title page
    title = doc.add_heading('Biology Notes', 0)
    title.alignment = WD_ALIGN_PARAGRAPH.CENTER

    subtitle = doc.add_heading('Organized Study Guide', level=1)
    subtitle.alignment = WD_ALIGN_PARAGRAPH.CENTER

    subtitle2 = doc.add_paragraph('生物学习笔记整理')
    subtitle2.alignment = WD_ALIGN_PARAGRAPH.CENTER

    date_para = doc.add_paragraph(f'Generated: {datetime.now().strftime("%Y-%m-%d")}')
    date_para.alignment = WD_ALIGN_PARAGRAPH.CENTER

    doc.add_page_break()

    # Table of contents placeholder
    doc.add_heading('Table of Contents', level=1)
    doc.add_paragraph('1. Cell Structure')
    doc.add_paragraph('2. Photosynthesis')
    doc.add_paragraph('3. Cellular Respiration')
    doc.add_paragraph('4. Genetics')
    doc.add_paragraph('5. Evolution')
    doc.add_paragraph('[Additional topics will be added based on your notes]')

    doc.add_page_break()

    # Sample content structure
    doc.add_heading('Unit 1: Cell Structure - 细胞结构', level=1)

    doc.add_heading('Key Terms', level=2)

    terms = [
        ('Cell Membrane (细胞膜)', 'The outer boundary of the cell that controls what enters and exits.'),
        ('Nucleus (细胞核)', 'The control center of the cell containing genetic material (DNA).'),
        ('Mitochondria (线粒体)', 'The powerhouse of the cell, responsible for energy production.'),
        ('Cytoplasm (细胞质)', 'The gel-like substance filling the cell.')
    ]

    for term, definition in terms:
        p = doc.add_paragraph(style='List Bullet')
        p.add_run(term).bold = True
        p.add_run(f': {definition}')

    doc.add_heading('Important Concepts', level=2)
    doc.add_paragraph('Active transport: Movement of molecules against concentration gradient (requires energy)', style='List Bullet')
    doc.add_paragraph('Passive transport: Movement along concentration gradient (no energy required)', style='List Bullet')
    doc.add_paragraph('Cellular respiration: Process of converting glucose to ATP', style='List Bullet')

    doc.add_heading('Common Exam Points', level=2)
    exam_point = doc.add_paragraph('Understand the difference between prokaryotic and eukaryotic cells')
    exam_point.runs[0].font.color.rgb = RGBColor(0, 0, 255)

    doc.add_page_break()

    # Unit 2
    doc.add_heading('Unit 2: Photosynthesis - 光合作用', level=1)

    doc.add_heading('Overall Equation', level=2)
    formula = doc.add_paragraph('6CO₂ + 6H₂O + Light Energy → C₆H₁₂O₆ + 6O₂')
    formula.alignment = WD_ALIGN_PARAGRAPH.CENTER
    formula.runs[0].font.name = 'Courier New'

    doc.add_heading('Key Stages', level=2)
    doc.add_paragraph('Light-dependent reactions: Occur in thylakoid membranes, produce ATP and NADPH', style='List Number')
    doc.add_paragraph('Light-independent reactions (Calvin Cycle): Occur in stroma, use ATP and NADPH to fix CO₂ into glucose', style='List Number')

    # Note about additional content
    doc.add_page_break()
    doc.add_heading('Notes', level=1)
    doc.add_paragraph('This is a template structure. The actual content will be populated from your handwritten notes after OCR processing.')
    doc.add_paragraph('[needs review] sections will be marked where the text was unclear or incomplete.')

    # Save document
    output_file = Path(__file__).parent / "Biology_Study_Guide.docx"
    doc.save(str(output_file))

    print(f"✓ Word document created: {output_file}")
    return output_file

def create_markdown_template():
    """Create a markdown version if docx library not available"""
    notes_dir = Path(__file__).parent
    output_file = notes_dir / "Biology_Study_Guide.md"

    content = """# Biology Notes - Organized Study Guide
## 生物学习笔记整理

Generated: {date}

---

## Table of Contents

1. [Cell Structure](#unit-1-cell-structure)
2. [Photosynthesis](#unit-2-photosynthesis)
3. [Cellular Respiration](#unit-3-cellular-respiration)
4. [Genetics](#unit-4-genetics)
5. [Evolution](#unit-5-evolution)

---

## Unit 1: Cell Structure - 细胞结构

### Key Terms

- **Cell Membrane (细胞膜):** The outer boundary of the cell that controls what enters and exits.
- **Nucleus (细胞核):** The control center of the cell containing genetic material (DNA).
- **Mitochondria (线粒体):** The powerhouse of the cell, responsible for energy production.
- **Cytoplasm (细胞质):** The gel-like substance filling the cell.

### Important Concepts

- Active transport: Movement of molecules against concentration gradient (requires energy)
- Passive transport: Movement along concentration gradient (no energy required)
- Cellular respiration: Process of converting glucose to ATP

### Common Exam Points

⭐ Understand the difference between prokaryotic and eukaryotic cells

---

## Unit 2: Photosynthesis - 光合作用

### Overall Equation

```
6CO₂ + 6H₂O + Light Energy → C₆H₁₂O₆ + 6O₂
```

### Key Stages

1. **Light-dependent reactions:** Occur in thylakoid membranes, produce ATP and NADPH
2. **Light-independent reactions (Calvin Cycle):** Occur in stroma, use ATP and NADPH to fix CO₂ into glucose

### Key Terms

- **Chlorophyll (叶绿素):** Green pigment that captures light energy
- **Stomata (气孔):** Pores in leaves that allow gas exchange

### Common Exam Points

⭐ Know the inputs and outputs of each stage of photosynthesis

---

## Unit 3: Cellular Respiration - 细胞呼吸

[Content will be added from OCR processing]

---

## Unit 4: Genetics - 遗传学

[Content will be added from OCR processing]

---

## Unit 5: Evolution - 进化论

[Content will be added from OCR processing]

---

## Notes

- This is a template structure
- Actual content will be populated from handwritten notes after OCR
- **[needs review]** marks unclear or incomplete sections

""".format(date=datetime.now().strftime("%Y-%m-%d"))

    output_file.write_text(content, encoding='utf-8')
    print(f"✓ Markdown template created: {output_file}")
    return output_file

if __name__ == "__main__":
    try:
        create_study_guide_docx()
    except Exception as e:
        print(f"Error: {str(e)}")
        print("Creating markdown template instead...")
        create_markdown_template()
