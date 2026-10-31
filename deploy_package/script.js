// Biology Study Guide JavaScript
// Content organized from AP Biology Class Notes

const studyContent = {
    topics: [
        {
            id: 'unit-1-evolution',
            title: 'Unit 1 — Evolution: What It Is',
            content: `
                <div class="topic-section">
                    <h2>Unit 1 — Evolution: What It Is</h2>

                    <h3>1.1 Definition of Evolution</h3>
                    <div class="key-terms">
                        <div class="term">
                            <strong>Evolution:</strong> The process of biological change by which species of organisms change over time.
                        </div>
                    </div>
                    <ul>
                        <li>Evolution is a central theme in all fields of biology today</li>
                        <li>Also defined as "the change in species over time" / "the gradual change in a species over time"</li>
                        <li>Darwin theorized that evolution occurs through a process known as <strong>natural selection</strong></li>
                    </ul>

                    <h3>1.2 Famous Quotation (Darwin's Origin of Species)</h3>
                    <div class="exam-point">
                        <strong>Key Quote:</strong> "It is not the most intellectual of the species that survives; it is not the strongest that survives; but the species that survives is the one that is able best to adapt and adjust to the changing environment in which it finds itself."
                    </div>
                </div>
            `
        },
        {
            id: 'unit-2-natural-selection',
            title: 'Unit 2 — Darwin\'s Theory of Natural Selection',
            content: `
                <div class="topic-section">
                    <h2>Unit 2 — Darwin's Theory of Natural Selection</h2>

                    <h3>2.1 Natural Selection — Definition</h3>
                    <div class="key-terms">
                        <div class="term">
                            <strong>Natural Selection:</strong> The process by which individuals that are better adapted to their environment survive and reproduce more successfully than less well adapted individuals do.
                        </div>
                        <div class="term">
                            <strong>Key Concept:</strong> "Survival of the Fittest"
                        </div>
                    </div>

                    <h3>2.2 The Four Steps of Natural Selection</h3>
                    <ol>
                        <li><strong>Overproduction:</strong> Each species produces more offspring than will survive to maturity</li>
                        <li><strong>Genetic (Inherited) Variation:</strong> Individuals in a population are slightly different from each other. Some traits increase chances of survival and reproduction — these beneficial traits are called <span class="highlight">adaptations</span></li>
                        <li><strong>Struggle to Survive:</strong> Limited resources mean not all individuals will live to adulthood. Those best adapted have a better chance of survival ("Survival of the Fittest")</li>
                        <li><strong>Successful Reproduction:</strong> Well-adapted individuals are more likely to survive and reproduce, passing their traits to offspring</li>
                    </ol>

                    <h3>2.3 Example: Insecticide Resistance</h3>
                    <ul>
                        <li>When insecticide is used, most insects die but a few with resistance genes survive</li>
                        <li>Survivors reproduce, passing resistance genes to offspring</li>
                        <li>In time, the replacement population is mostly resistant</li>
                        <li>When same insecticide is used again, only a few are killed</li>
                    </ul>

                    <h3>2.4 Selective Breeding (Artificial Selection)</h3>
                    <div class="key-terms">
                        <div class="term">
                            <strong>Selective Breeding:</strong> The human practice of breeding animals or plants that have certain desired traits. Example: Dogs bred for various desired traits.
                        </div>
                    </div>
                    <p>This is "one of the proofs" of natural selection.</p>

                    <h3>2.5 Limits of Darwin's Theory</h3>
                    <div class="exam-point">
                        <strong>Darwin couldn't explain:</strong>
                        <ul>
                            <li>Why are there variations between individuals?</li>
                            <li>How do parents pass their traits to offspring?</li>
                        </ul>
                    </div>
                </div>
            `
        },
        {
            id: 'unit-3-evidence',
            title: 'Unit 3 — Evidence of Evolution',
            content: `
                <div class="topic-section">
                    <h2>Unit 3 — Evidence of Evolution</h2>

                    <p><strong>Four Types of Evidence:</strong> fossils · body structures · DNA · similarities in early development</p>

                    <h3>3.1 Fossils</h3>
                    <div class="key-terms">
                        <div class="term">
                            <strong>Fossil:</strong> The trace or remains of an organism that lived long ago, most commonly preserved in sedimentary rock.
                        </div>
                        <div class="term">
                            <strong>Fossil Record:</strong> A historical sequence of life indicated by fossils, used to draw connections — evolutionary trees.
                        </div>
                    </div>

                    <h4>Types of Fossils:</h4>
                    <ul>
                        <li><strong>Fossils in Asphalt:</strong> Organisms trapped in sticky asphalt pools</li>
                        <li><strong>Frozen Fossils:</strong> Preserved in ice (cold slows decay)</li>
                        <li><strong>Trace Fossils:</strong> Record what an animal or plant <em>did</em>, not what it <em>was</em></li>
                        <li><strong>Fossils in Amber:</strong> Organisms trapped in tree sap that hardened into amber (insects, lizards, frogs)</li>
                    </ul>

                    <h3>3.2 DNA Evidence</h3>
                    <div class="exam-point">
                        <strong>DNA Rule:</strong> The greater the number of similarities between DNA, the more closely two species are related through a common ancestor.
                    </div>

                    <h4>Primate Evolutionary Tree (by DNA similarity):</h4>
                    <table>
                        <tr>
                            <th>Species</th>
                            <th>DNA Similarity</th>
                        </tr>
                        <tr>
                            <td>Ancestral Primate</td>
                            <td>92.0%</td>
                        </tr>
                        <tr>
                            <td>Orangutan</td>
                            <td>96.3%</td>
                        </tr>
                        <tr>
                            <td>Gorilla</td>
                            <td>97.7%</td>
                        </tr>
                        <tr>
                            <td>Chimpanzee</td>
                            <td>98.2%</td>
                        </tr>
                        <tr>
                            <td><strong>Human</strong></td>
                            <td><strong>Terminal branch</strong></td>
                        </tr>
                    </table>

                    <h3>3.3 Similarities in Early Development</h3>
                    <p>Similarities in early development <strong>suggest</strong> that species are related and share a common ancestor.</p>

                    <h3>3.4 Phylogenetic Trees</h3>
                    <div class="key-terms">
                        <div class="term">
                            <strong>Phylogenetic Tree:</strong> A branching diagram that shows evolutionary relationships among different biological species based on similarities and differences in their genetic or physical traits.
                        </div>
                    </div>
                </div>
            `
        },
        {
            id: 'unit-4-speciation',
            title: 'Unit 4 — Speciation',
            content: `
                <div class="topic-section">
                    <h2>Unit 4 — Speciation</h2>

                    <h3>4.1 Key Definitions</h3>
                    <div class="key-terms">
                        <div class="term">
                            <strong>Species:</strong> A group of organisms that can reproduce/mate with one another in nature and produce <strong>fertile offspring</strong>.
                        </div>
                        <div class="term">
                            <strong>Speciation:</strong> The formation of new species as a result of evolution.
                        </div>
                    </div>

                    <h3>4.2 The Three Steps of Speciation</h3>
                    <ol>
                        <li><strong>Step 1 — Separation:</strong> Speciation often begins when a part of a population becomes separated from the rest</li>
                        <li><strong>Step 2 — Adaptation:</strong> After separation, natural selection may act on each group in different ways</li>
                        <li><strong>Step 3 — Division:</strong> Over many generations, two separated groups may become so different that they can <strong>no longer mate with one another</strong> — they are now different species</li>
                    </ol>

                    <h3>4.3 Example: Temporal Isolation</h3>
                    <p>Non-overlapping mating seasons separate populations reproductively:</p>
                    <ul>
                        <li><strong>Leopard frog:</strong> peaks around April</li>
                        <li><strong>Pickerel frog:</strong> peaks around late April/early May</li>
                        <li><strong>Tree frog:</strong> peaks around June</li>
                        <li><strong>Bullfrog:</strong> peaks around late June/early July</li>
                    </ul>
                    <div class="exam-point">
                        <strong>Key Point:</strong> These non-overlapping mating times prevent the species from interbreeding (temporal isolation).
                    </div>
                </div>
            `
        },
        {
            id: 'unit-5-ecology',
            title: 'Unit 5 — Ecology: Populations',
            content: `
                <div class="topic-section">
                    <h2>Unit 5 — Ecology: Populations and Species Interactions</h2>

                    <h3>5.1 Carrying Capacity and Limiting Factors</h3>
                    <div class="key-terms">
                        <div class="term">
                            <strong>Carrying Capacity:</strong> The largest population that an environment can support.
                        </div>
                        <div class="term">
                            <strong>Limiting Factor:</strong> A resource that is so scarce that it limits the size of a population.
                        </div>
                    </div>

                    <h4>Examples of Limiting Factors:</h4>
                    <ul>
                        <li><strong>Food:</strong> Where food is scarce, it becomes a limiting factor</li>
                        <li><strong>Space:</strong> Animals need room for nests; plants need room for light and water</li>
                        <li><strong>Weather:</strong> Temperature and rainfall can limit growth (e.g., frost kills insects)</li>
                    </ul>

                    <h3>5.2 Four Main Ways Species Interact</h3>
                    <ol>
                        <li><strong>Competition:</strong> When two or more individuals try to use the same resource</li>
                        <li><strong>Predators and Prey:</strong> Predators eat all or part of another organism</li>
                        <li><strong>Symbiosis:</strong> Close long-term interactions (see below)</li>
                        <li><strong>Coevolution:</strong> Long-term change in two species due to their close interactions</li>
                    </ol>

                    <h3>5.3 Three Types of Symbiosis</h3>

                    <h4>Mutualism — Both Species Benefit</h4>
                    <ul>
                        <li><strong>Acacia tree & ants:</strong> Tree provides nectar and shelter; ants protect tree</li>
                        <li><strong>Clownfish & sea anemone:</strong> Clownfish gets protection; cleans anemone</li>
                        <li><strong>Honeyguide bird & honey badger:</strong> Bird leads to nest; both get food</li>
                    </ul>

                    <h4>Commensalism — One Benefits, Other Unaffected</h4>
                    <ul>
                        <li><strong>Remora & shark:</strong> Remora gets free ride and food scraps; shark unaffected</li>
                        <li><strong>Barnacles & whales:</strong> Barnacles filter-feed; whale unaffected</li>
                        <li><strong>Birds nesting in trees</strong></li>
                    </ul>

                    <h4>Parasitism — One Benefits, Other Harmed</h4>
                    <ul>
                        <li><strong>Tapeworm & humans:</strong> Tapeworm absorbs nutrients; host loses nutrition</li>
                        <li><strong>Fleas/ticks & pets:</strong> Feed on blood; cause irritation and disease</li>
                        <li><strong>Malaria parasite & humans:</strong> Causes malaria</li>
                    </ul>
                </div>
            `
        },
        {
            id: 'unit-6-energy',
            title: 'Unit 6 — Ecosystems: Energy Roles',
            content: `
                <div class="topic-section">
                    <h2>Unit 6 — Ecosystems: Energy Roles</h2>

                    <h3>Energy Roles in Ecosystems</h3>

                    <div class="key-terms">
                        <div class="term">
                            <strong>Producers:</strong> Use sunlight directly to make food through photosynthesis. Examples: plants, algae, some bacteria.
                        </div>
                        <div class="term">
                            <strong>Consumers:</strong> Eat other organisms.
                        </div>
                        <div class="term">
                            <strong>Decomposers:</strong> Get energy by breaking down dead organisms — nature's recyclers. Examples: bacteria, fungi.
                        </div>
                    </div>

                    <h3>Types of Consumers</h3>
                    <table>
                        <tr>
                            <th>Type</th>
                            <th>Diet</th>
                            <th>Example</th>
                        </tr>
                        <tr>
                            <td>Herbivores</td>
                            <td>Eat only plants</td>
                            <td>Cows</td>
                        </tr>
                        <tr>
                            <td>Carnivores</td>
                            <td>Eat animals</td>
                            <td>Tigers</td>
                        </tr>
                        <tr>
                            <td>Omnivores</td>
                            <td>Eat both plants and animals</td>
                            <td>Humans</td>
                        </tr>
                        <tr>
                            <td>Scavengers</td>
                            <td>Eat dead plants and animals</td>
                            <td>Turkey vultures</td>
                        </tr>
                    </table>

                    <h3>Energy Pyramids</h3>
                    <p>When an organism eats, it obtains energy. It uses some of this energy to move, grow, reproduce, and carry out life processes.</p>

                    <div class="exam-point">
                        <strong>Key Concept:</strong> Energy flows through ecosystems from producers to consumers to decomposers.
                    </div>
                </div>
            `
        },
        {
            id: 'unit-7-cycles',
            title: 'Unit 7 — Cycles of Matter',
            content: `
                <div class="topic-section">
                    <h2>Unit 7 — Cycles of Matter</h2>

                    <p><strong>Four Major Cycles:</strong> water cycle · carbon cycle · nitrogen cycle · phosphorus cycle</p>

                    <h3>7.1 The Water Cycle</h3>
                    <div class="key-terms">
                        <div class="term">
                            <strong>Water Cycle:</strong> The continuous movement of Earth's water from the ocean to the atmosphere to the land and back to the ocean, driven by energy from the sun.
                        </div>
                    </div>

                    <h4>Key Water Cycle Processes:</h4>
                    <ul>
                        <li><strong>Condensation:</strong> Gas cools and turns to liquid or ice</li>
                        <li><strong>Evaporation:</strong> Liquid to gas</li>
                        <li><strong>Precipitation:</strong> Water falls as rain, hail, sleet, or snow</li>
                        <li><strong>Transpiration:</strong> Water from plants turns to gas</li>
                        <li><strong>Percolation:</strong> Downward movement of water through soil</li>
                        <li><strong>Runoff:</strong> Precipitation flows over land into streams and rivers</li>
                        <li><strong>Groundwater:</strong> Water stored underground</li>
                    </ul>

                    <h3>7.2 The Carbon Cycle</h3>
                    <div class="key-terms">
                        <div class="term">
                            <strong>Carbon Cycle:</strong> The biogeochemical process by which carbon atoms continuously travel between Earth's atmosphere, biosphere, oceans, and geosphere.
                        </div>
                    </div>

                    <h4>Carbon Cycle Flow:</h4>
                    <ol>
                        <li>Sunlight → <strong>Photosynthesis by producers</strong> → removes CO₂ from atmosphere</li>
                        <li><strong>Plant respiration</strong> returns CO₂ to atmosphere</li>
                        <li><strong>Animal respiration</strong> returns CO₂ to atmosphere</li>
                        <li><strong>Decomposition</strong> → fossils and fossil fuels</li>
                        <li><strong>Fossil fuel combustion</strong> → CO₂ in atmosphere</li>
                    </ol>

                    <div class="exam-point">
                        <strong>Human Impact on Carbon Cycle (2 ways):</strong>
                        <ol>
                            <li>Combustion of fossil fuels</li>
                            <li>Deforestation</li>
                        </ol>
                    </div>
                </div>
            `
        },
        {
            id: 'glossary',
            title: 'Key Terms Glossary',
            content: `
                <div class="topic-section">
                    <h2>Key Terms Glossary</h2>

                    <div class="key-terms">
                        <div class="term">
                            <strong>Adaptation:</strong> A (physical or behavioral) characteristic that helps an organism survive and reproduce in its environment.
                        </div>
                        <div class="term">
                            <strong>Cladogram:</strong> Branching chart showing evolutionary relationships.
                        </div>
                        <div class="term">
                            <strong>Coevolution:</strong> Long-term change in two species caused by their close interactions.
                        </div>
                        <div class="term">
                            <strong>Evolution:</strong> Process of biological change by which species change over time.
                        </div>
                        <div class="term">
                            <strong>Fossil Record:</strong> Historical sequence of life indicated by fossils.
                        </div>
                        <div class="term">
                            <strong>Natural Selection:</strong> Process by which better-adapted individuals survive and reproduce more successfully.
                        </div>
                        <div class="term">
                            <strong>Speciation:</strong> Formation of new species as a result of evolution.
                        </div>
                        <div class="term">
                            <strong>Survival of the Fittest:</strong> The environment selects which organisms live and which die.
                        </div>
                        <div class="term">
                            <strong>Temporal Isolation:</strong> Separation of populations by non-overlapping mating times.
                        </div>
                        <div class="term">
                            <strong>Trait:</strong> A genetically determined characteristic.
                        </div>
                    </div>

                    <h3>Study Tips</h3>
                    <ul>
                        <li>Focus on the four steps of natural selection</li>
                        <li>Understand the three steps of speciation</li>
                        <li>Know examples for each type of symbiosis</li>
                        <li>Be able to explain how human activities affect carbon cycle</li>
                        <li>Review all key terms and definitions</li>
                    </ul>
                </div>
            `
        }
    ]
};

// Initialize the app
function init() {
    loadNavigation();
    setupEventListeners();

    // Load first topic by default
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
