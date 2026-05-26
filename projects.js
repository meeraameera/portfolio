const academicProjects = [
  {
    title: "Meat Freshness Classifier",
    description:
      "A deep learning model deployed as an Android application that classifies fresh vs. spoiled meat using image data. This project explores baseline CNNs, transfer learning, and fine-tuning of advanced architectures (VGG16, ResNet50, InceptionV3).",
    tech: "Python · Deep Learning · Transfer Learning · Model Fine-Tuning · TensorFlow · Keras · Android Studio · Gradle",
    details: `
      <h4>Key Features</h4>
      <ul>
        <li><strong>Data Pipeline:</strong>
          <ul>
            <li>Implemented data exploration, pre-processing, and augmentation (rotation, shifting, zooming, flipping) to improve model generalization.</li>
          </ul>
        </li>
        <li><strong>Model Selection:</strong>
          <ul>
            <li>Explored multiple transfer learning architectures (InceptionV3, ResNet50, MobileNetV2, EfficientNetB0, VGG16) to select the best performing model.</li>
          </ul>
        </li>
        <li><strong>High Recall for Spoilage:</strong>
          <ul>
            <li>The fine-tuned VGG16 model correctly identified <strong>96 out of 96 Spoiled instances</strong> (100% Recall for the Spoiled class), with only 2 misclassifications of Fresh meat as Spoiled.</li>
          </ul>
        </li>
        <li><strong>High Accuracy:</strong>
          <ul>
            <li>Achieved an accuracy of <strong>99%</strong> on the test set with the final fine-tuned VGG16 model.</li>
          </ul>
        </li>
        <li><strong>Mobile Deployment:</strong>
          <ul>
            <li>Successfully integrated the trained model into an <strong>Android application</strong>.</li>
          </ul>
        </li>
      </ul>
    `,
    youtube: null,
    github: "https://github.com/meeraameera/meat-freshness-classifier",
  },
  {
    title: "Anemia Classifier",
    description:
      "A machine learning classification model deployed as a Streamlit web application that predicts anemia status using hematological parameters from CBC reports. This project explores data preprocessing for medical datasets, addressing class imbalance and outliers to optimize an ensemble classifier for clinical screening.",
    tech: "Python · Pandas · Exploratory Data Analysis (EDA) · Machine Learning · Scikit-learn · Streamlit",
    details: `
      <h4>Key Features</h4>
      <ul>
        <li><strong>Addressing Data Challenges:</strong>
          <ul>
            <li>Successfully implemented techniques to handle <strong>significant outliers</strong> and the inherent <strong>class imbalance</strong> within the clinical dataset, ensuring a generalizable and unbiased model.</li>
          </ul>
        </li>
        <li><strong>Feature Importance Validation:</strong>
          <ul>
            <li>Utilized feature importance metrics to confirm that medically relevant parameters (such as Hemoglobin (HGB), MCV, and MCH) are the primary drivers of the prediction.</li>
          </ul>
        </li>
        <li><strong>Optimized Model Selection:</strong>
          <ul>
            <li>Explored and compared multiple supervised classification algorithms (e.g., Logistic Regression, Support Vector Machines, Ensemble methods) to systematically select the best-performing model after hyperparameter tuning.</li>
          </ul>
        </li>
        <li><strong>End-to-End Deployment:</strong>
          <ul>
            <li>The final, optimized model was serialized (<code>.pkl</code> file) and integrated into an accessible <strong>Streamlit</strong> web application, showcasing full-stack deployment capability.</li>
          </ul>
        </li>
      </ul>
    `,
    youtube: null,
    github: "https://github.com/meeraameera/anemia-classifier",
  },
  {
    title: "WanderAlert: IoT Dementia Sensor System",
    description:
      "A serverless IoT system deployed on AWS that prevents dementia-related wandering using door sensors and facial recognition. This project utilizes an event-driven architecture, integrating AWS IoT Core, Lambda, and Amazon Rekognition to provide real-time, identity-verified alerts via SNS to caregivers.",
    tech: "AWS IoT Core · AWS Lambda · Amazon Rekognition · Amazon DynamoDB · Amazon S3 · AWS SNS · AWS Amplify · API Gateway",
    details: `
      <h4>Key Features</h4>
      <ul>
        <li><strong>Serverless, Scalable Architecture:</strong>
          <ul>
            <li>Built entirely on <strong>AWS services</strong> (IoT Core, Lambda, DynamoDB, S3, Rekognition) for high reliability, scalability, and minimal operational overhead.</li>
          </ul>
        </li>
        <li><strong>Intelligent Identity Verification:</strong>
          <ul>
            <li>Leverages <strong>Amazon Rekognition</strong> for facial recognition to confirm the identity of the person opening the door, preventing false alarms and ensuring only relevant events trigger notifications.</li>
          </ul>
        </li>
        <li><strong>Comprehensive Logging and Historical Access:</strong>
          <ul>
            <li>Stores all sensor events, timestamps, and facial recognition results in <strong>Amazon DynamoDB</strong> and archives image data in <strong>Amazon S3</strong>.</li>
          </ul>
        </li>
        <li><strong>Real-Time Caregiver Alerts:</strong>
          <ul>
            <li>Uses <strong>AWS Simple Notification Service (SNS)</strong> to immediately notify caregivers via Email.</li>
          </ul>
        </li>
        <li><strong>Mobile and Web Interface:</strong>
          <ul>
            <li>A Caregiver's Mobile App and web interface for viewing real-time alerts and accessing historical logs, including linked images and event graphs.</li>
          </ul>
        </li>
      </ul>
    `,
    youtube: null,
    github: "https://github.com/meeraameera/wanderalert",
  },
  {
    title: "Ticketing Buddy: Automated Flight Ticketing and Price Comparison RPA Solution",
    description:
      "Ticketing Buddy is an unattended RPA bot developed with UiPath that automates booking the cheapest plane tickets. It handles structured input, scrapes and compares prices, completes bookings, and updates confirmations, improving efficiency and reducing human errors for frequent travellers and agencies.",
    tech: "UiPath (RPA Development) · UiPath.Excel.Activities  · UiPath.Word.Activities  · UiPath.PDF.Activities  · Outlook Integration (for email/calendar)",
    details: `
      <h4>Key Features</h4>
      <ul>
        <li><strong>Data Pipeline:</strong>
          <ul>
            <li>Extracts required travel details from a user-provided <strong>Word document</strong> and converts them into an <strong>Excel spreadsheet</strong> for structured processing.</li>
          </ul>
        </li>
        <li><strong>Automated Comparison:</strong>
          <ul>
            <li>Searches and scrapes data from the <strong>Trip.com website</strong> to compare prices and identify the cheapest plane ticket, while also considering other requirements specified in the document (e.g., direct flights, class type).</li>
          </ul>
        </li>
        <li><strong>Post-Booking Integration:</strong>
          <ul>
            <li>Automates administrative tasks by sending booking confirmation emails via <strong>Outlook</strong> and adding flight dates and times to the <strong>Outlook Calendar</strong>.</li>
          </ul>
        </li>
        <li><strong>Unattended Operation:</strong>
          <ul>
            <li>Can be scheduled to run continuously <strong>without human intervention</strong>, improving efficiency for users such as travel agencies.</li>
          </ul>
        </li>
        <li><strong>Error Reduction:</strong>
          <ul>
            <li>Reduces inaccurate bookings caused by manual data entry, which can otherwise lead to additional change fees.</li>
          </ul>
        </li>
      </ul>
    `,
    youtube: "https://youtu.be/C9-uFtPojI8",
    github: "https://github.com/meeraameera/ticketing-buddy",
  },
  {
    title: "AirlineBuddy: Rasa Conversational AI with RAG and Sentiment Analysis for Dynamic Airline Support",
    description:
      "A Natural Language Processing project that combines an airline review sentiment analysis model with a deployed Rasa-powered chatbot, AirlineBuddy. The project integrates a Retrieval-Augmented Generation (RAG) pipeline using Google Search and the Ollama/Gemma LLM to classify reviews, store feedback in MySQL, and deliver accurate, up-to-date airline information through an interactive chat interface.",
    tech: "Python · Rasa Framework · Scikit-learn · Natural Language Toolkit · Google Custom Search API · Ollama (Gemma:2b LLM) · MySQL · Requests",
    details: `
      <h4>Key Features</h4>
      <ul>
        <li><strong>Data Pipeline:</strong>
          <ul>
            <li>Pre-processing of review data, including Tokenization, Stopword Removal, Lemmatization, Sentence Embedding, and Vectorization.</li>
          </ul>
        </li>
        <li><strong>Sentiment Analysis Model:</strong>
          <ul>
            <li>Developed a <strong>Logistic Regression</strong> classifier (chosen for performance on a balanced dataset) to classify customer reviews into one of three sentiment classes: Positive, Negative, or Neutral.</li>
          </ul>
        </li>
        <li><strong>Rasa Chatbot Deployment:</strong>
          <ul>
            <li>Implemented a dialogue system using the Rasa framework, defining custom intents, entities, slots, rules, and complex stories.</li>
          </ul>
        </li>
        <li><strong>Custom Action Integration:</strong>
          <ul>
            <li>A custom action that validates user input (airline name, rating 1-5, review text) and submits the review to a <strong>MySQL database</strong>.</li>
            <li>A RAG pipeline that queries Google Search and uses the <strong>Ollama (Gemma:2b)</strong> LLM to summarize and generate a user-friendly response.</li>
            </ul>
        </li>
        <li><strong>Dynamic Q&A:</strong>
          <ul>
            <li>Enables users to ask real-time questions about airline topics (e.g., 'What is the baggage allowance for Emirates?').</li>
          </ul>
        </li>
      </ul>
    `,
    youtube: null,
    github: "https://github.com/meeraameera/airlinebuddy",
  },
  {
    title: "EcoBites: Flutter Mobile App with AI and Relational Database for Food Waste Tracking and Reduction",
    description:
      "A cross-platform Flutter mobile application that helps families track and manage household food inventory to reduce food wastage. The project features inventory tracking by storage location, expiration reminders with urgent notifications, quantity monitoring to prevent overbuying, and analytics to visualize food wastage habits, supported by a relational database and a high-fidelity mobile prototype.",
    tech: "Mobile App Development · Flutter · Dart · MySQL Database · High Fidelity Prototyping",
    details: `
      <h4>Key Features</h4>
      <ul>
        <li><strong>UI Layer:</strong>
          <ul>
            <li>Used <strong>StatelessWidgets</strong> for static content to optimize performance, and <strong>StatefulWidgets</strong> only when dynamic user interaction is required.</li>
          </ul>
        </li>
        <li><strong>Expiration Reminders:</strong>
          <ul>
            <li><strong>Alerts users about products expiring soon</strong>, with filtering options by days, weeks, months, or years.</li>
          </ul>
        </li>
        <li><strong>Inventory Management (CRUD):</strong>
          <ul>
            <li>Allows users to <strong>C</strong>reate, <strong>R</strong>ead, <strong>U</strong>pdate, and <strong>D</strong>elete grocery item information, including name, category, quantity, and storage location.</li>
          </ul>
        </li>
        <li><strong>Wastage Analytics:</strong>
          <ul>
            <li>Tracks food wastage data over time , enabling users to <strong>view monthly statistics</strong> and identify top wastage categories to promote self-awareness and improvement.</li>
          </ul>
        </li>
        <li><strong>Past History:</strong>
          <ul>
            <li>Records items that were "Fully Consumed" or "Expired" , helping users gauge future purchasing habits.</li>
          </ul>
        </li>
      </ul>
    `,
    youtube: "https://youtu.be/_G-Gc2D0cAc",
    github: "https://github.com/meeraameera/ecobites",
  },
];


const workProjects = [
  {
    title: "Automated Trade Booking Sheet (OCBC Internship Project: Data Engineering)",
    description:
      "An intelligent backend automation system designed to streamline the processing of unstructured financial term sheets. By leveraging YAML-driven configurations and rule-based AI logic, the system automates the ingestion, parsing, and validation of complex investment documents (PDFs and Outlook items), transforming them into standardized downstream deliverables for trade booking and lifecycle management.",
    tech: "Python · YAML · PyWin32 · PDFPlumber · Pandas · Camelot · Data Engineering · Automation",
    details: `
      <h4>Key Features</h4>
      <ul>
        <li><strong>Multimodal Data Ingestion:</strong>
          <ul>
            <li>Automates the extraction of plain text and tabular data from varied sources, including unstructured PDFs and Outlook email attachments, <strong>replacing manual entry tasks that previously took up to 30 minutes per trade.</strong></li>
          </ul>
        </li>
        <li><strong>YAML-Driven Mapping & Scalability:</strong>
          <ul>
            <li>Employs a dynamic configuration architecture using <strong>YAML</strong> templates to map unique counterparty layouts and product variations (FX RA, CMS RA, FCN) without requiring core code changes.</li>
          </ul>
        </li>
        <li><strong>Rule-Based Validation & Transformation:</strong>
          <ul>
            <li>Implements a data engineering pipeline for cleaning, normalization, and business-rule validation, ensuring 100% data consistency for downstream systems like <strong>FINIQ</strong> and <strong>Murex</strong>.</li>
          </ul>
        </li>
        <li><strong>End-to-End Workflow Orchestration:</strong>
          <ul>
            <li>Features full process automation including batch scheduling, secure file archiving, and automated email reporting for success/error tracking to enhance operational transparency.</li>
          </ul>
        </li>
      </ul>
    `,
    youtube: null,
    github: null,
  },
  {
    title: "FinSight",
    description:
      "A Machine Learning pipeline to automate the categorization of personal banking transactions. The project features a full-stack architecture, comprising a Scikit-Learn ML backend, a Flask REST API, and a Streamlit data visualization dashboard, designed to help users identify spending patterns, optimize budgets, and gain financial self-awareness through automated data processing.",
    tech: "Python · Machine Learning · Scikit-Learn · Natural Language Processing · Flask (REST API) · Streamlit · Pandas · Pickle",
    details: `
      <h4>Key Features</h4>
      <ul>
        <li><strong>Automated Categorization:</strong>
          <ul>
            <li>Utilizes a Logistic Regression model with TF-IDF vectorization to <strong>classify raw transaction descriptions</strong> into categories like Food & Dining, Transport, and Utilities</li>
          </ul>
        </li>
        <li><strong>Advanced Text Preprocessing:</strong>
          <ul>
            <li>Implements a <strong>custom NLP cleaning pipeline</strong> using Regex to strip noise (e.g., transaction IDs, special characters, and dates) to ensure high model robustness.</li>
          </ul>
        </li>
        <li><strong>Hyperparameter Optimization:</strong>
          <ul>
            <li>Features a comprehensive <strong>Grid Search (GridSearchCV)</strong> cross-validation process to fine-tune regularization strength and N-gram ranges for peak performance.</li>
          </ul>
        </li>
        <li><strong>Interactive Spending Dashboard:</strong>
          <ul>
            <li>A <strong>Streamlit-based</strong>frontend that visualizes financial health through dynamic pie charts and categorical breakdowns.</li>
          </ul>
        </li>
        <li><strong>Daily Analytics:</strong>
          <ul>
            <li>Includes a state-managed interactive interface allowing users to <strong>filter and view</strong> granular transaction details by specific dates without losing session data.</li>
          </ul>
        </li>
        <li><strong>Weekly Aggregation:</strong>
          <ul>
            <li>Automatically <strong>groups and summarizes</strong> spending habits by week to highlight long-term financial trends.</li>
          </ul>
        </li>
      </ul>
    `,
    youtube: null,
    github: "https://github.com/meeraameera/finsight",
  },
  {
    title: "FinLogic",
    description:
      "FinLogic is an interactive financial modeling tool built with Streamlit and Python that demystifies the mechanics of wealth accumulation and debt. By combining real-time visualization with educational components, the application allows users to simulate investment growth and loan amortization schedules, helping them understand the long-term impact of interest rates and compounding frequencies.",
    tech: "Python · Streamlit · Pandas · Plotly · NumPy · LaTeX · Financial Modeling · Data Visualization",
    details: `
      <h4>Key Features</h4>
      <ul>
        <li><strong>Dual-Mode Simulation:</strong>
          <ul>
            <li>Utilizes a Logistic Regression model with TF-IDF vectorization to <strong>classify raw transaction descriptions</strong> into categories like Food & Dining, Transport, and Utilities</li>
          </ul>
        </li>
        <li><strong>Advanced Text Preprocessing:</strong>
          <ul>
            <li>Implements a <strong>custom NLP cleaning pipeline</strong> using Regex to strip noise (e.g., transaction IDs, special characters, and dates) to ensure high model robustness.</li>
          </ul>
        </li>
        <li><strong>Hyperparameter Optimization:</strong>
          <ul>
            <li>Features a comprehensive <strong>Grid Search (GridSearchCV)</strong> cross-validation process to fine-tune regularization strength and N-gram ranges for peak performance.</li>
          </ul>
        </li>
      </ul>
    `,
    youtube: null,
    github: "https://github.com/meeraameera/finlogic",
  },
];


/* -------- RENDER PROJECT CARDS -------- */
function createProjectCard(project, index, type) {
  return `
    <div class="project-card" data-animate onclick="openModal('${type}', ${index})">
      <h4>${project.title}</h4>
      <p>${project.description}</p>
      <span class="tech">${project.tech}</span>

      <div class="project-links" onclick="event.stopPropagation()">
        ${
          project.youtube
            ? `<a href="${project.youtube}" target="_blank" class="btn btn-youtube">Demo</a>`
            : ""
        }
        ${
          project.github
            ? `<a href="${project.github}" target="_blank" class="btn btn-github">GitHub</a>`
            : ""
        }
      </div>

      <span class="view-more">Click for more details →</span>
    </div>
  `;
}


/* -------- RENDER PROJECTS -------- */
function renderProjects(list, targetId, type) {
  const container = document.getElementById(targetId);
  if (!container) return;

  container.innerHTML = list
    .map((p, i) => createProjectCard(p, i, type))
    .join("");
}

renderProjects(academicProjects, "academic-projects-grid", "academic");
renderProjects(workProjects, "work-projects-grid", "work");


/* -------- MODAL -------- */
function openModal(type, index) {
  const project =
    type === "academic"
      ? academicProjects[index]
      : workProjects[index];

  if (!project) return;

  document.getElementById("modal-title").textContent = project.title;
  document.getElementById("modal-tech").textContent = project.tech;
  document.getElementById("modal-description").innerHTML = project.details;

  const linksContainer = document.getElementById("modal-links");
linksContainer.innerHTML = "";

if (project.youtube) {
  linksContainer.innerHTML += `
    <a href="${project.youtube}" target="_blank" class="btn btn-youtube">
      Watch Demo
    </a>
  `;
}

if (project.github) {
  linksContainer.innerHTML += `
    <a href="${project.github}" target="_blank" class="btn btn-github">
      View GitHub
    </a>
  `;
}

  document.querySelector(".modal-overlay").classList.add("open");
}

function closeModal() {
  document.querySelector(".modal-overlay").classList.remove("open");
}