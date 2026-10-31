// Biology Study Guide JavaScript

// Sample data structure - will be populated with actual notes
const studyContent = {
    topics: [
        {
            id: 'cell-structure',
            title: 'Cell Structure',
            content: `
                <div class="topic-section">
                    <h2>Cell Structure - 细胞结构</h2>

                    <h3>Key Terms</h3>
                    <div class="key-terms">
                        <div class="term">
                            <strong>Cell Membrane (细胞膜):</strong> The outer boundary of the cell that controls what enters and exits.
                        </div>
                        <div class="term">
                            <strong>Nucleus (细胞核):</strong> The control center of the cell containing genetic material (DNA).
                        </div>
                        <div class="term">
                            <strong>Mitochondria (线粒体):</strong> The powerhouse of the cell, responsible for energy production.
                        </div>
                        <div class="term">
                            <strong>Cytoplasm (细胞质):</strong> The gel-like substance filling the cell.
                        </div>
                    </div>

                    <h3>Important Processes</h3>
                    <ul>
                        <li>Active transport: Movement of molecules against concentration gradient (requires energy)</li>
                        <li>Passive transport: Movement along concentration gradient (no energy required)</li>
                        <li>Cellular respiration: Process of converting glucose to ATP</li>
                    </ul>

                    <div class="exam-point">
                        <strong>Common Exam Point:</strong> Understand the difference between prokaryotic and eukaryotic cells.
                    </div>
                </div>
            `
        },
        {
            id: 'photosynthesis',
            title: 'Photosynthesis',
            content: `
                <div class="topic-section">
                    <h2>Photosynthesis - 光合作用</h2>

                    <h3>Overall Equation</h3>
                    <div class="formula">
                        6CO₂ + 6H₂O + Light Energy → C₆H₁₂O₆ + 6O₂
                    </div>

                    <h3>Key Stages</h3>
                    <ol>
                        <li><strong>Light-dependent reactions:</strong> Occur in thylakoid membranes, produce ATP and NADPH</li>
                        <li><strong>Light-independent reactions (Calvin Cycle):</strong> Occur in stroma, use ATP and NADPH to fix CO₂ into glucose</li>
                    </ol>

                    <h3>Key Terms</h3>
                    <div class="key-terms">
                        <div class="term">
                            <strong>Chlorophyll (叶绿素):</strong> Green pigment that captures light energy.
                        </div>
                        <div class="term">
                            <strong>Stomata (气孔):</strong> Pores in leaves that allow gas exchange.
                        </div>
                    </div>

                    <div class="exam-point">
                        <strong>Common Exam Point:</strong> Know the inputs and outputs of each stage of photosynthesis.
                    </div>
                </div>
            `
        },
        {
            id: 'genetics',
            title: 'Genetics',
            content: `
                <div class="topic-section">
                    <h2>Genetics - 遗传学</h2>

                    <h3>Key Terms</h3>
                    <div class="key-terms">
                        <div class="term">
                            <strong>Gene (基因):</strong> A unit of heredity; a segment of DNA that codes for a protein.
                        </div>
                        <div class="term">
                            <strong>Allele (等位基因):</strong> Different versions of the same gene.
                        </div>
                        <div class="term">
                            <strong>Genotype (基因型):</strong> The genetic makeup of an organism.
                        </div>
                        <div class="term">
                            <strong>Phenotype (表型):</strong> The observable characteristics of an organism.
                        </div>
                    </div>

                    <h3>Mendel's Laws</h3>
                    <ol>
                        <li><strong>Law of Segregation:</strong> Each parent contributes one allele for each trait</li>
                        <li><strong>Law of Independent Assortment:</strong> Genes for different traits are inherited independently</li>
                    </ol>

                    <h3>Punnett Square Example</h3>
                    <table>
                        <tr>
                            <th></th>
                            <th>A</th>
                            <th>a</th>
                        </tr>
                        <tr>
                            <th>A</th>
                            <td>AA</td>
                            <td>Aa</td>
                        </tr>
                        <tr>
                            <th>a</th>
                            <td>Aa</td>
                            <td>aa</td>
                        </tr>
                    </table>

                    <div class="exam-point">
                        <strong>Common Exam Point:</strong> Be able to solve monohybrid and dihybrid crosses.
                    </div>
                </div>
            `
        }
    ]
};

// Initialize the app
function init() {
    loadNavigation();
    setupEventListeners();

    // Load first topic by default if available
    if (studyContent.topics.length > 0) {
        loadTopic(studyContent.topics[0].id);
    }
}

// Load navigation menu
function loadNavigation() {
    const navLinks = document.getElementById('navLinks');
    navLinks.innerHTML = '';

    studyContent.topics.forEach(topic => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = `#${topic.id}`;
        a.textContent = topic.title;
        a.dataset.topicId = topic.id;
        li.appendChild(a);
        navLinks.appendChild(li);
    });
}

// Load topic content
function loadTopic(topicId) {
    const topic = studyContent.topics.find(t => t.id === topicId);
    if (!topic) return;

    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = topic.content;

    // Update active nav link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.dataset.topicId === topicId) {
            link.classList.add('active');
        }
    });

    // Scroll to top
    window.scrollTo(0, 0);
}

// Setup event listeners
function setupEventListeners() {
    // Navigation clicks
    document.getElementById('navLinks').addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            e.preventDefault();
            const topicId = e.target.dataset.topicId;
            loadTopic(topicId);

            // Close sidebar on mobile
            if (window.innerWidth <= 768) {
                document.getElementById('sidebar').classList.remove('active');
            }
        }
    });

    // Mobile menu toggle
    document.getElementById('menuToggle').addEventListener('click', () => {
        document.getElementById('sidebar').classList.toggle('active');
    });

    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', (e) => {
        const sidebar = document.getElementById('sidebar');
        const menuToggle = document.getElementById('menuToggle');

        if (window.innerWidth <= 768 &&
            !sidebar.contains(e.target) &&
            e.target !== menuToggle) {
            sidebar.classList.remove('active');
        }
    });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Export for potential use in other scripts
window.BiologyStudyGuide = {
    loadTopic,
    studyContent
};
