/**
 * Saddleback Bakery Case Study Generator
 * Main Application Logic
 */

// ===================================
// DOM Elements
// ===================================
const form = document.getElementById('caseStudyForm');
const titleInput = document.getElementById('caseTitle');
const summaryInput = document.getElementById('caseSummary');
const charCountSpan = document.getElementById('charCount');
const previewArea = document.getElementById('previewArea');
const downloadBtn = document.getElementById('downloadBtn');

// ===================================
// State Management
// ===================================
let generatedCaseStudy = null;

// ===================================
// Event Listeners
// ===================================

// Character counter for summary textarea
summaryInput.addEventListener('input', function() {
    charCountSpan.textContent = this.value.length;
});

// Form submission handler
form.addEventListener('submit', function(e) {
    e.preventDefault();
    generateCaseStudy();
});

// Download button handler
downloadBtn.addEventListener('click', function() {
    if (generatedCaseStudy) {
        downloadPDF();
    }
});

// ===================================
// Case Study Generation Logic
// ===================================

/**
 * Main function to generate a case study from the input
 */
function generateCaseStudy() {
    const title = titleInput.value.trim();
    const summary = summaryInput.value.trim();

    if (!title || !summary) {
        alert('Please fill in both the title and summary fields.');
        return;
    }

    // Generate expanded case study
    const expandedContent = expandSummary(summary);

    // Create case study object
    generatedCaseStudy = {
        title: title,
        content: expandedContent,
        date: new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    };

    // Display preview
    displayPreview(generatedCaseStudy);

    // Enable download button
    downloadBtn.disabled = false;
}

/**
 * Expands a summary into a full case study (400-600 words)
 * This function uses text processing to create structured business content
 */
function expandSummary(summary) {
    // Split summary into sentences for analysis
    const sentences = summary.match(/[^.!?]+[.!?]+/g) || [summary];

    // Identify key themes and content
    const hasCustomerFocus = /customer|client|user|patron/i.test(summary);
    const hasChallenges = /challenge|problem|issue|difficulty/i.test(summary);
    const hasSolutions = /solution|approach|strategy|implement/i.test(summary);
    const hasResults = /result|outcome|success|improve|increase|decrease/i.test(summary);

    // Build structured case study sections
    const sections = [];

    // 1. Background/Context Section
    sections.push({
        title: '📊 Background',
        content: buildBackgroundSection(sentences, summary)
    });

    // 2. Challenge Section
    if (hasChallenges) {
        sections.push({
            title: '🎯 The Challenge',
            content: buildChallengeSection(sentences, summary)
        });
    }

    // 3. Approach/Methodology Section
    sections.push({
        title: '💡 Our Approach',
        content: buildApproachSection(sentences, summary, hasSolutions)
    });

    // 4. Results/Findings Section
    if (hasResults || sentences.length > 3) {
        sections.push({
            title: '✨ Results & Insights',
            content: buildResultsSection(sentences, summary, hasResults)
        });
    } else {
        sections.push({
            title: '🔍 Key Findings',
            content: buildFindingsSection(sentences, summary)
        });
    }

    return sections;
}

/**
 * Build the Background section
 */
function buildBackgroundSection(sentences, summary) {
    const intro = "Saddleback Bakery is committed to understanding and serving our community through thoughtful research and customer engagement. This case study presents insights gathered through systematic interview processes and observational research.";

    // Use first part of summary as context
    const context = sentences.slice(0, Math.ceil(sentences.length / 3)).join(' ');

    return `${intro}\n\n${context}\n\nThis research was conducted to better understand customer needs, preferences, and experiences within our bakery environment, providing valuable data to inform business decisions and enhance service quality.`;
}

/**
 * Build the Challenge section
 */
function buildChallengeSection(sentences, summary) {
    // Extract challenge-related content
    const challengeKeywords = /challenge|problem|issue|difficulty|concern|obstacle/i;
    const relevantSentences = sentences.filter(s => challengeKeywords.test(s));

    const intro = "Every successful business initiative begins with identifying the right questions to answer. Our research aimed to uncover:";

    if (relevantSentences.length > 0) {
        return `${intro}\n\n${relevantSentences.join(' ')}\n\nUnderstanding these challenges allowed us to design targeted research questions and gather meaningful insights that would drive actionable improvements.`;
    } else {
        // Extract middle portion if no specific challenges mentioned
        const middleContent = sentences.slice(
            Math.floor(sentences.length / 3),
            Math.ceil(2 * sentences.length / 3)
        ).join(' ');

        return `${intro}\n\n${middleContent}\n\nThese areas of inquiry formed the foundation of our research methodology and guided our interview process.`;
    }
}

/**
 * Build the Approach section
 */
function buildApproachSection(sentences, summary, hasSolutions) {
    const methodIntro = "Our research methodology combined qualitative interviews with observational techniques to gather comprehensive insights.";

    if (hasSolutions) {
        const solutionKeywords = /solution|approach|strategy|method|implement|process/i;
        const relevantSentences = sentences.filter(s => solutionKeywords.test(s));

        if (relevantSentences.length > 0) {
            return `${methodIntro} ${relevantSentences.join(' ')}\n\nWe employed structured interview protocols while remaining flexible enough to explore unexpected themes that emerged during conversations. This balanced approach ensured we captured both planned data points and organic insights.`;
        }
    }

    // Default approach content using middle section
    const middleStart = Math.floor(sentences.length / 3);
    const middleEnd = Math.min(middleStart + 2, sentences.length);
    const content = sentences.slice(middleStart, middleEnd).join(' ');

    return `${methodIntro} ${content}\n\nOur interview process involved carefully crafted questions designed to elicit authentic responses while maintaining a comfortable, conversational atmosphere. We prioritized active listening and follow-up questions to dig deeper into significant themes.`;
}

/**
 * Build the Results section
 */
function buildResultsSection(sentences, summary, hasResults) {
    const intro = "The research yielded valuable insights that will inform our business strategy and operational improvements.";

    if (hasResults) {
        const resultKeywords = /result|outcome|finding|discover|reveal|indicate|suggest|show/i;
        const relevantSentences = sentences.filter(s => resultKeywords.test(s));

        if (relevantSentences.length > 0) {
            return `${intro} ${relevantSentences.join(' ')}\n\nThese findings provide a roadmap for enhancing customer experience, refining our product offerings, and strengthening our connection with the community we serve.`;
        }
    }

    // Use latter portion of summary
    const lastPortion = sentences.slice(Math.ceil(2 * sentences.length / 3)).join(' ');

    return `${intro} ${lastPortion}\n\nMoving forward, these insights will guide decision-making across multiple aspects of our business, from product development to customer service protocols. The data gathered represents not just information, but a deeper understanding of our customers' needs and expectations.`;
}

/**
 * Build the Findings section (alternative to Results)
 */
function buildFindingsSection(sentences, summary) {
    const intro = "Our research uncovered several key themes and patterns that deserve attention:";

    const content = sentences.slice(Math.floor(sentences.length / 2)).join(' ');

    return `${intro}\n\n${content}\n\nThese findings represent preliminary insights that warrant further investigation. By continuing to engage with our customers through research and dialogue, we can build a more nuanced understanding of their needs and create even better experiences at Saddleback Bakery.`;
}

// ===================================
// Preview Display Logic
// ===================================

/**
 * Display the generated case study in the preview area
 */
function displayPreview(caseStudy) {
    const html = `
        <div class="case-study">
            <div class="case-study-header">
                <div class="case-study-brand">
                    <span>🥖</span>
                    <span>Saddleback Bakery</span>
                </div>
                <h2 class="case-study-title">${escapeHtml(caseStudy.title)}</h2>
                <p class="case-study-meta">Case Study | ${caseStudy.date}</p>
            </div>
            <div class="case-study-body">
                ${caseStudy.content.map(section => `
                    <div class="case-study-section">
                        <h3>${section.title}</h3>
                        ${section.content.split('\n\n').map(para =>
                            `<p>${escapeHtml(para)}</p>`
                        ).join('')}
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    previewArea.innerHTML = html;

    // Smooth scroll to preview
    previewArea.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

/**
 * Escape HTML to prevent XSS
 */
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ===================================
// PDF Generation Logic
// ===================================

/**
 * Generate and download a PDF of the case study
 */
function downloadPDF() {
    // Access jsPDF from the global window object
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Page settings
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 20;
    const contentWidth = pageWidth - (2 * margin);
    let yPosition = margin;

    // Color scheme
    const primaryColor = [139, 69, 19]; // Saddle brown
    const secondaryColor = [212, 165, 116]; // Wheat/golden
    const textColor = [31, 41, 55]; // Dark gray

    // Helper function to check if we need a new page
    function checkPageBreak(requiredSpace) {
        if (yPosition + requiredSpace > pageHeight - margin) {
            doc.addPage();
            yPosition = margin;
            return true;
        }
        return false;
    }

    // Header decoration
    doc.setFillColor(...secondaryColor);
    doc.rect(0, 0, pageWidth, 15, 'F');

    // Bakery icon and brand
    doc.setFontSize(16);
    doc.text('🥖 Saddleback Bakery', pageWidth / 2, 10, { align: 'center' });

    yPosition = 25;

    // Title
    doc.setFontSize(20);
    doc.setTextColor(...primaryColor);
    doc.setFont(undefined, 'bold');
    const titleLines = doc.splitTextToSize(generatedCaseStudy.title, contentWidth);
    doc.text(titleLines, margin, yPosition);
    yPosition += (titleLines.length * 10) + 5;

    // Date
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.setFont(undefined, 'italic');
    doc.text(`Case Study | ${generatedCaseStudy.date}`, margin, yPosition);
    yPosition += 10;

    // Divider line
    doc.setDrawColor(...secondaryColor);
    doc.setLineWidth(1);
    doc.line(margin, yPosition, pageWidth - margin, yPosition);
    yPosition += 10;

    // Content sections
    generatedCaseStudy.content.forEach((section, index) => {
        // Section title
        checkPageBreak(20);
        doc.setFontSize(14);
        doc.setTextColor(...primaryColor);
        doc.setFont(undefined, 'bold');
        doc.text(section.title, margin, yPosition);
        yPosition += 8;

        // Section content
        doc.setFontSize(11);
        doc.setTextColor(...textColor);
        doc.setFont(undefined, 'normal');

        const paragraphs = section.content.split('\n\n');
        paragraphs.forEach(para => {
            const lines = doc.splitTextToSize(para, contentWidth);

            lines.forEach(line => {
                checkPageBreak(7);
                doc.text(line, margin, yPosition);
                yPosition += 6;
            });

            yPosition += 4; // Space between paragraphs
        });

        yPosition += 6; // Space between sections
    });

    // Footer on each page
    const totalPages = doc.internal.getNumberOfPages();
    for (let i = 1; i <= totalPages; i++) {
        doc.setPage(i);

        // Footer decoration
        doc.setFillColor(...secondaryColor);
        doc.rect(0, pageHeight - 15, pageWidth, 15, 'F');

        // Footer text
        doc.setFontSize(9);
        doc.setTextColor(80, 80, 80);
        doc.setFont(undefined, 'normal');
        doc.text(
            '© 2024 Saddleback Bakery | Baking knowledge into every case study',
            pageWidth / 2,
            pageHeight - 8,
            { align: 'center' }
        );

        // Page number
        doc.text(
            `Page ${i} of ${totalPages}`,
            pageWidth - margin,
            pageHeight - 8,
            { align: 'right' }
        );
    }

    // Generate filename from title
    const filename = generatedCaseStudy.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '') + '.pdf';

    // Download the PDF
    doc.save(filename);
}

// ===================================
// Initialization
// ===================================

// Focus on title input when page loads
window.addEventListener('load', function() {
    titleInput.focus();
});

console.log('🥖 Saddleback Bakery Case Study Generator initialized!');
