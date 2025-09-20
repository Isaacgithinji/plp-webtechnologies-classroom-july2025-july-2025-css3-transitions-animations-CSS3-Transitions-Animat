// ============================================================================
// DYNAMIC INTERACTIVE WEB EXPERIENCE - JAVASCRIPT FUNCTIONS & ANIMATIONS
// Assignment: Bringing Web Pages to Life with CSS & JavaScript
// ============================================================================

// ============================================================================
// PART 2: GLOBAL VARIABLES (DEMONSTRATING GLOBAL SCOPE)
// ============================================================================

// Global counters for statistics
let globalClickCounter = 0;
let globalAnimationCounter = 0;
let globalFunctionCallCounter = 0;
let startTime = Date.now();

// Global arrays for demonstrations
let currentArray = [];

// Game state variables
let gameActive = false;
let gameScore = 0;
let gameClicks = 0;
let gameInterval = null;

// Loading state tracker
let activeLoadingIntervals = [];

console.log('🚀 Dynamic Web Experience JavaScript Loaded!');
console.log('📊 Global variables initialized in global scope');

// ============================================================================
// PART 2: MATHEMATICAL FUNCTIONS WITH PARAMETERS & RETURN VALUES
// ============================================================================

/**
 * Performs mathematical calculations with proper parameter handling and return values
 * Demonstrates: Parameters, return values, error handling
 * @param {number} num1 - First number
 * @param {number} num2 - Second number  
 * @param {string} operation - Operation to perform
 * @returns {number|string} - Result of calculation or error message
 */
function calculateMath(num1, num2, operation) {
    // Increment function call counter (global scope access)
    globalFunctionCallCounter++;
    updateStatistics();
    
    // Local variable (demonstrating local scope)
    let result;
    let operationSymbol;
    
    // Parameter validation
    if (isNaN(num1) || isNaN(num2)) {
        return "Error: Please enter valid numbers";
    }
    
    // Perform calculation based on operation parameter
    switch(operation) {
        case 'add':
            result = num1 + num2;
            operationSymbol = '+';
            break;
        case 'subtract':
            result = num1 - num2;
            operationSymbol = '-';
            break;
        case 'multiply':
            result = num1 * num2;
            operationSymbol = '×';
            break;
        case 'divide':
            if (num2 === 0) {
                return "Error: Cannot divide by zero";
            }
            result = num1 / num2;
            operationSymbol = '÷';
            break;
        case 'power':
            result = Math.pow(num1, num2);
            operationSymbol = '^';
            break;
        default:
            return "Error: Invalid operation";
    }
    
    // Format result and return with operation details
    const formattedResult = Number(result.toFixed(6));
    return `${num1} ${operationSymbol} ${num2} = ${formattedResult}`;
}

/**
 * Handles calculation button click and displays result
 * Demonstrates: Function calls, DOM manipulation, local variables
 */
function performCalculation() {
    // Increment global click counter
    globalClickCounter++;
    
    // Local variables (local scope)
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    
    // Call calculation function and get return value
    const calculationResult = calculateMath(num1, num2, operation);
    
    // Update DOM with result
    const resultElement = document.getElementById('calculationResult');
    const resultValue = resultElement.querySelector('.result-value');
    
    // Animate result display
    resultElement.style.transform = 'scale(1.05)';
    resultElement.style.background = '#e8f5e8';
    
    setTimeout(() => {
        scopeDisplay.style.transform = 'scale(1)';
        scopeDisplay.style.boxShadow = '';
    }, 300);
    
    updateStatistics();
    
    console.log('🎯 Scope demonstration executed');
    console.log(`Global counter: ${globalScopeCounter}`);
    console.log(`Local variable would not be accessible here: ${typeof localVariable}`);
    
    // Return demonstration value
    return `Scope demo completed at ${new Date().toLocaleTimeString()}`;
}

// ============================================================================
// PART 2: UTILITY FUNCTIONS WITH PARAMETERS & RETURN VALUES
// ============================================================================

/**
 * Generates a random color with RGB values
 * Demonstrates: Math operations, return object, helper functions
 * @returns {object} - Object containing color information
 */
function generateRandomColorData() {
    globalFunctionCallCounter++;
    
    // Local variables for color generation
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    
    // Helper function to convert RGB to HEX (nested function)
    function rgbToHex(r, g, b) {
        const componentToHex = (c) => {
            const hex = c.toString(16);
            return hex.length === 1 ? "0" + hex : hex;
        };
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }
    
    // Helper function to calculate brightness
    function calculateBrightness(r, g, b) {
        return (r * 299 + g * 587 + b * 114) / 1000;
    }
    
    const hexColor = rgbToHex(red, green, blue);
    const brightness = calculateBrightness(red, green, blue);
    
    // Return object with color data
    return {
        rgb: `rgb(${red}, ${green}, ${blue})`,
        hex: hexColor,
        brightness: brightness,
        isDark: brightness < 128,
        red: red,
        green: green,
        blue: blue
    };
}

/**
 * Handles random color generation and display
 * Demonstrates: Function calls, object destructuring, DOM manipulation
 */
function generateRandomColor() {
    globalClickCounter++;
    
    // Get color data from utility function
    const colorData = generateRandomColorData();
    
    // Destructure returned object (modern JavaScript)
    const { rgb, hex, brightness, isDark } = colorData;
    
    // Update DOM elements
    const colorBox = document.getElementById('colorBox');
    const colorCode = document.getElementById('colorCode');
    
    // Animate color change
    colorBox.style.transform = 'scale(0.8)';
    
    setTimeout(() => {
        colorBox.style.backgroundColor = rgb;
        colorBox.style.transform = 'scale(1.1)';
        colorCode.textContent = `${hex} (${rgb})`;
        colorCode.style.color = isDark ? '#ffffff' : '#000000';
        
        setTimeout(() => {
            colorBox.style.transform = 'scale(1)';
        }, 200);
    }, 100);
    
    updateStatistics();
    console.log(`🎨 Generated color: ${hex} (brightness: ${brightness.toFixed(1)})`);
}

/**
 * Array processing functions with different operations
 * Demonstrates: Array methods, parameters, return values
 * @param {string} operation - Array operation to perform
 */
function processArray(operation) {
    globalClickCounter++;
    globalFunctionCallCounter++;
    
    let result;
    let displayText;
    
    switch(operation) {
        case 'generate':
            // Generate random array
            currentArray = generateRandomArray(8, 1, 100);
            displayText = `[${currentArray.join(', ')}] (Generated)`;
            break;
            
        case 'sort':
            if (currentArray.length === 0) {
                showTemporaryMessage('arrayDisplay', 'Generate an array first!', 'error');
                return;
            }
            currentArray = sortArray([...currentArray]);
            displayText = `[${currentArray.join(', ')}] (Sorted)`;
            break;
            
        case 'reverse':
            if (currentArray.length === 0) {
                showTemporaryMessage('arrayDisplay', 'Generate an array first!', 'error');
                return;
            }
            currentArray = reverseArray([...currentArray]);
            displayText = `[${currentArray.join(', ')}] (Reversed)`;
            break;
            
        case 'sum':
            if (currentArray.length === 0) {
                showTemporaryMessage('arrayDisplay', 'Generate an array first!', 'error');
                return;
            }
            const sum = calculateArraySum(currentArray);
            const average = (sum / currentArray.length).toFixed(2);
            displayText = `Sum: ${sum}, Average: ${average} (Array: [${currentArray.join(', ')}])`;
            break;
    }
    
    // Update display with animation
    const arrayDisplay = document.getElementById('arrayDisplay');
    const arrayValue = arrayDisplay.querySelector('.array-value');
    
    animateElementUpdate(arrayDisplay, () => {
        arrayValue.textContent = displayText;
    });
    
    updateStatistics();
}

/**
 * Helper function to generate random array
 * @param {number} length - Array length
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {array} - Generated array
 */
function generateRandomArray(length, min, max) {
    return Array.from({ length }, () => Math.floor(Math.random() * (max - min + 1)) + min);
}

/**
 * Helper function to sort array
 * @param {array} arr - Array to sort
 * @returns {array} - Sorted array
 */
function sortArray(arr) {
    return arr.sort((a, b) => a - b);
}

/**
 * Helper function to reverse array
 * @param {array} arr - Array to reverse
 * @returns {array} - Reversed array
 */
function reverseArray(arr) {
    return arr.reverse();
}

/**
 * Helper function to calculate array sum
 * @param {array} arr - Array to sum
 * @returns {number} - Sum of array elements
 */
function calculateArraySum(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

// ============================================================================
// PART 3: CSS ANIMATION TRIGGERS WITH JAVASCRIPT
// ============================================================================

/**
 * Triggers CSS animations by adding/removing classes
 * Demonstrates: DOM manipulation, CSS class control, timing functions
 * @param {string} animationType - Type of animation to trigger
 */
function triggerAnimation(animationType) {
    globalClickCounter++;
    globalAnimationCounter++;
    globalFunctionCallCounter++;
    
    const animationBox = document.getElementById('animationBox');
    
    // Remove any existing animation classes
    resetAnimationClasses(animationBox);
    
    // Add specific animation class based on parameter
    const animationClass = `animate-${animationType}`;
    animationBox.classList.add(animationClass);
    
    // Log animation trigger
    console.log(`🎬 Triggered ${animationType} animation`);
    
    // Remove animation class after animation completes
    const animationDuration = getAnimationDuration(animationType);
    
    setTimeout(() => {
        animationBox.classList.remove(animationClass);
    }, animationDuration);
    
    updateStatistics();
}

/**
 * Helper function to reset animation classes
 * @param {HTMLElement} element - Element to reset
 */
function resetAnimationClasses(element) {
    const animationClasses = ['animate-bounce', 'animate-shake', 'animate-flip', 'animate-zoom', 'animate-rainbow'];
    animationClasses.forEach(className => {
        element.classList.remove(className);
    });
}

/**
 * Helper function to get animation duration
 * @param {string} animationType - Animation type
 * @returns {number} - Duration in milliseconds
 */
function getAnimationDuration(animationType) {
    const durations = {
        bounce: 800,
        shake: 600,
        flip: 1000,
        zoom: 800,
        rainbow: 2000
    };
    return durations[animationType] || 1000;
}

/**
 * Resets all animations on the target element
 * Demonstrates: DOM class manipulation, function organization
 */
function resetAnimations() {
    globalClickCounter++;
    
    const animationBox = document.getElementById('animationBox');
    resetAnimationClasses(animationBox);
    
    // Add a brief "reset" animation
    animationBox.style.transform = 'scale(0.95)';
    animationBox.style.opacity = '0.7';
    
    setTimeout(() => {
        animationBox.style.transform = 'scale(1)';
        animationBox.style.opacity = '1';
    }, 200);
    
    updateStatistics();
    console.log('🔄 Animations reset');
}

// ============================================================================
// PART 3: INTERACTIVE CARD FLIP SYSTEM
// ============================================================================

/**
 * Handles card flip animations with JavaScript class control
 * @param {HTMLElement} cardElement - Card to flip
 * @param {string} cardType - Type of card for tracking
 */
function flipCard(cardElement, cardType) {
    globalClickCounter++;
    globalAnimationCounter++;
    globalFunctionCallCounter++;
    
    // Toggle flip class to trigger CSS animation
    cardElement.classList.toggle('flipped');
    
    // Add temporary highlight effect
    cardElement.style.boxShadow = '0 10px 40px rgba(102, 126, 234, 0.4)';
    
    setTimeout(() => {
        cardElement.style.boxShadow = '';
    }, 800);
    
    updateStatistics();
    console.log(`🃏 Card flipped: ${cardType}`);
}

// ============================================================================
// PART 3: DYNAMIC MODAL SYSTEM WITH ANIMATIONS
// ============================================================================

/**
 * Shows animated modal with different animation types
 * @param {string} animationType - Type of animation (slideIn, fadeIn, zoomIn)
 * @param {string} title - Modal title
 * @param {string} message - Modal message
 */
function showModal(animationType, title, message) {
    globalClickCounter++;
    globalAnimationCounter++;
    globalFunctionCallCounter++;
    
    const modalOverlay = document.getElementById('modalOverlay');
    const modalContent = document.getElementById('modalContent');
    const modalTitle = document.getElementById('modalTitle');
    const modalMessage = document.getElementById('modalMessage');
    
    // Set modal content
    modalTitle.textContent = title;
    modalMessage.textContent = message;
    
    // Reset animation classes
    modalContent.className = 'modal-content';
    
    // Show modal
    modalOverlay.classList.add('show');
    
    // Add animation class
    setTimeout(() => {
        modalContent.classList.add(`modal-${animationType}`);
    }, 10);
    
    updateStatistics();
    console.log(`📝 Modal shown with ${animationType} animation`);
}

/**
 * Closes the modal with fade out effect
 */
function closeModal() {
    globalClickCounter++;
    
    const modalOverlay = document.getElementById('modalOverlay');
    const modalContent = document.getElementById('modalContent');
    
    // Add fade out effect
    modalContent.style.opacity = '0';
    modalContent.style.transform = 'scale(0.8)';
    
    setTimeout(() => {
        modalOverlay.classList.remove('show');
        modalContent.style.opacity = '1';
        modalContent.style.transform = 'scale(1)';
    }, 300);
    
    console.log('❌ Modal closed');
}

// ============================================================================
// PART 3: DYNAMIC LOADING ANIMATIONS
// ============================================================================

/**
 * Creates and manages loading animations dynamically
 * @param {string} type - Loading animation type
 * @param {number} duration - Duration in milliseconds
 */
function startLoading(type, duration) {
    globalClickCounter++;
    globalAnimationCounter++;
    globalFunctionCallCounter++;
    
    // Stop any existing loading animations
    stopAllLoading();
    
    const container = document.getElementById('loadingContainer');
    container.innerHTML = ''; // Clear existing content
    
    // Create loading element based on type
    const loadingElement = createLoadingElement(type);
    container.appendChild(loadingElement);
    
    // Auto-stop after duration
    const timeoutId = setTimeout(() => {
        stopAllLoading();
        showLoadingComplete(container);
    }, duration);
    
    // Track active loading
    activeLoadingIntervals.push(timeoutId);
    
    updateStatistics();
    console.log(`⏳ Started ${type} loading for ${duration}ms`);
}

/**
 * Creates loading elements dynamically
 * @param {string} type - Type of loading animation
 * @returns {HTMLElement} - Created loading element
 */
function createLoadingElement(type) {
    const wrapper = document.createElement('div');
    wrapper.style.display = 'flex';
    wrapper.style.flexDirection = 'column';
    wrapper.style.alignItems = 'center';
    wrapper.style.gap = '1rem';
    
    switch(type) {
        case 'spinner':
            const spinner = document.createElement('div');
            spinner.className = 'spinner';
            wrapper.appendChild(spinner);
            wrapper.appendChild(createLoadingText('Loading with spinner...'));
            break;
            
        case 'dots':
            const dotsContainer = document.createElement('div');
            dotsContainer.className = 'dots-loader';
            for(let i = 0; i < 3; i++) {
                const dot = document.createElement('div');
                dotsContainer.appendChild(dot);
            }
            wrapper.appendChild(dotsContainer);
            wrapper.appendChild(createLoadingText('Loading with dots...'));
            break;
            
        case 'progress':
            const progressBar = document.createElement('div');
            progressBar.className = 'progress-bar';
            const progressFill = document.createElement('div');
            progressFill.className = 'progress-fill';
            progressBar.appendChild(progressFill);
            wrapper.appendChild(progressBar);
            wrapper.appendChild(createLoadingText('Loading with progress...'));
            
            // Animate progress
            setTimeout(() => {
                progressFill.style.width = '100%';
            }, 100);
            break;
            
        case 'pulse':
            const pulseLoader = document.createElement('div');
            pulseLoader.className = 'pulse-loader';
            wrapper.appendChild(pulseLoader);
            wrapper.appendChild(createLoadingText('Loading with pulse...'));
            break;
    }
    
    return wrapper;
}

/**
 * Helper function to create loading text
 * @param {string} text - Loading text
 * @returns {HTMLElement} - Text element
 */
function createLoadingText(text) {
    const textElement = document.createElement('p');
    textElement.textContent = text;
    textElement.style.color = '#666';
    textElement.style.marginTop = '1rem';
    return textElement;
}

/**
 * Stops all active loading animations
 */
function stopAllLoading() {
    globalClickCounter++;
    
    // Clear all timeouts
    activeLoadingIntervals.forEach(id => clearTimeout(id));
    activeLoadingIntervals = [];
    
    const container = document.getElementById('loadingContainer');
    container.innerHTML = '<p class="loading-message">Loading stopped</p>';
    
    setTimeout(() => {
        container.innerHTML = '<p class="loading-message">Select a loading animation above</p>';
    }, 2000);
    
    console.log('⏹ All loading animations stopped');
}

/**
 * Shows loading complete message
 * @param {HTMLElement} container - Container element
 */
function showLoadingComplete(container) {
    container.innerHTML = '<p class="loading-message" style="color: #28a745; font-weight: bold;">✅ Loading Complete!</p>';
    
    setTimeout(() => {
        container.innerHTML = '<p class="loading-message">Select a loading animation above</p>';
    }, 3000);
}

// ============================================================================
// PART 3: INTERACTIVE GAME DEMONSTRATION
// ============================================================================

/**
 * Starts the interactive target catching game
 * Demonstrates: Intervals, random positioning, score tracking
 */
function startGame() {
    globalClickCounter++;
    globalFunctionCallCounter++;
    
    if (gameActive) {
        console.log('🎮 Game already active');
        return;
    }
    
    gameActive = true;
    gameScore = 0;
    gameClicks = 0;
    
    updateGameDisplay();
    
    const target = document.getElementById('movingTarget');
    const gameArea = document.getElementById('gameArea');
    
    // Reset target
    target.style.display = 'flex';
    target.classList.remove('caught');
    
    // Move target randomly every 1.5 seconds
    gameInterval = setInterval(() => {
        if (gameActive) {
            moveTargetRandomly(target, gameArea);
        }
    }, 1500);
    
    // Initial move
    moveTargetRandomly(target, gameArea);
    
    console.log('🎮 Game started!');
    
    // Auto-stop game after 30 seconds
    setTimeout(() => {
        if (gameActive) {
            stopGame();
        }
    }, 30000);
}

/**
 * Moves the target to a random position
 * @param {HTMLElement} target - Target element
 * @param {HTMLElement} gameArea - Game area element
 */
function moveTargetRandomly(target, gameArea) {
    const areaRect = gameArea.getBoundingClientRect();
    const targetSize = 50;
    
    const maxX = areaRect.width - targetSize;
    const maxY = areaRect.height - targetSize;
    
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    
    target.style.left = randomX + 'px';
    target.style.top = randomY + 'px';
    
    // Add entrance animation
    target.style.transform = 'scale(0.8)';
    setTimeout(() => {
        target.style.transform = 'scale(1)';
    }, 100);
}

/**
 * Handles target click (catching the target)
 */
function catchTarget() {
    if (!gameActive) return;
    
    globalClickCounter++;
    gameClicks++;
    gameScore += 10;
    
    const target = document.getElementById('movingTarget');
    
    // Add caught animation
    target.classList.add('caught');
    
    // Move to new position after animation
    setTimeout(() => {
        target.classList.remove('caught');
        if (gameActive) {
            moveTargetRandomly(target, document.getElementById('gameArea'));
        }
    }, 500);
    
    updateGameDisplay();
    console.log(`🎯 Target caught! Score: ${gameScore}`);
}

/**
 * Resets the game to initial state
 */
function resetGame() {
    globalClickCounter++;
    
    stopGame();
    
    gameScore = 0;
    gameClicks = 0;
    
    updateGameDisplay();
    
    const target = document.getElementById('movingTarget');
    target.style.left = '50%';
    target.style.top = '50%';
    target.style.transform = 'translate(-50%, -50%)';
    
    console.log('🔄 Game reset');
}

/**
 * Stops the active game
 */
function stopGame() {
    gameActive = false;
    
    if (gameInterval) {
        clearInterval(gameInterval);
        gameInterval = null;
    }
    
    console.log(`🛑 Game stopped. Final score: ${gameScore}`);
}

/**
 * Updates game display elements
 */
function updateGameDisplay() {
    document.getElementById('gameScore').textContent = gameScore;
    document.getElementById('gameClicks').textContent = gameClicks;
}

// ============================================================================
// UTILITY FUNCTIONS FOR ANIMATIONS AND FEEDBACK
// ============================================================================

/**
 * Animates element updates with smooth transitions
 * @param {HTMLElement} element - Element to animate
 * @param {Function} updateCallback - Function to call during animation
 */
function animateElementUpdate(element, updateCallback) {
    element.style.transform = 'scale(1.05)';
    element.style.background = '#e8f5e8';
    
    setTimeout(() => {
        updateCallback();
        element.style.transform = 'scale(1)';
        element.style.background = '';
    }, 200);
}

/**
 * Shows temporary messages with auto-hide
 * @param {string} elementId - Element ID to update
 * @param {string} message - Message to show
 * @param {string} type - Message type (error, success, info)
 */
function showTemporaryMessage(elementId, message, type = 'info') {
    const element = document.getElementById(elementId);
    const originalContent = element.innerHTML;
    
    // Color based on type
    const colors = {
        error: '#e74c3c',
        success: '#27ae60',
        info: '#3498db'
    };
    
    element.innerHTML = `<span style="color: ${colors[type]}; font-weight: bold;">${message}</span>`;
    
    setTimeout(() => {
        element.innerHTML = originalContent;
    }, 3000);
}

// ============================================================================
// STATISTICS AND PERFORMANCE TRACKING
// ============================================================================

/**
 * Updates live statistics display
 * Demonstrates: Global variable access, DOM updates, calculations
 */
function updateStatistics() {
    // Update counters
    document.getElementById('totalClicks').textContent = globalClickCounter;
    document.getElementById('animationsTriggered').textContent = globalAnimationCounter;
    document.getElementById('functionsExecuted').textContent = globalFunctionCallCounter;
    
    // Update time on page
    const currentTime = Date.now();
    const timeElapsed = Math.floor((currentTime - startTime) / 1000);
    const minutes = Math.floor(timeElapsed / 60);
    const seconds = timeElapsed % 60;
    document.getElementById('timeOnPage').textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    // Update progress bars
    const maxValue = Math.max(globalClickCounter, globalAnimationCounter, globalFunctionCallCounter, 1);
    
    updateProgressBar('clicksBar', globalClickCounter, maxValue);
    updateProgressBar('animationsBar', globalAnimationCounter, maxValue);
    updateProgressBar('functionsBar', globalFunctionCallCounter, maxValue);
    updateProgressBar('timeBar', timeElapsed, 300); // 5 minutes max
}

/**
 * Updates individual progress bars
 * @param {string} barId - Progress bar element ID
 * @param {number} currentValue - Current value
 * @param {number} maxValue - Maximum value for percentage calculation
 */
function updateProgressBar(barId, currentValue, maxValue) {
    const bar = document.getElementById(barId);
    const percentage = Math.min((currentValue / maxValue) * 100, 100);
    bar.style.width = percentage + '%';
}

// ============================================================================
// INITIALIZATION AND EVENT LISTENERS
// ============================================================================

/**
 * Initializes the application when DOM is loaded
 * Sets up event listeners and starts statistics updates
 */
function initializeApp() {
    console.log('🚀 Initializing Dynamic Web Experience...');
    
    // Start statistics update interval
    setInterval(updateStatistics, 1000);
    
    // Add keyboard shortcuts
    document.addEventListener('keydown', handleKeyboardShortcuts);
    
    // Add click tracking to all buttons
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', () => {
            if (!button.onclick) {
                globalClickCounter++;
            }
        });
    });
    
    // Initialize display
    updateStatistics();
    updateGameDisplay();
    
    console.log('✅ Application initialized successfully!');
    console.log('📊 Statistics tracking active');
    console.log('⌨️ Keyboard shortcuts enabled');
}

/**
 * Handles keyboard shortcuts for enhanced interactivity
 * @param {KeyboardEvent} event - Keyboard event
 */
function handleKeyboardShortcuts(event) {
    // Only trigger if not typing in input fields
    if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
        return;
    }
    
    switch(event.key.toLowerCase()) {
        case 'b':
            triggerAnimation('bounce');
            break;
        case 's':
            triggerAnimation('shake');
            break;
        case 'f':
            triggerAnimation('flip');
            break;
        case 'z':
            triggerAnimation('zoom');
            break;
        case 'r':
            triggerAnimation('rainbow');
            break;
        case 'c':
            generateRandomColor();
            break;
        case 'escape':
            closeModal();
            break;
    }
}

// ============================================================================
// APPLICATION STARTUP
// ============================================================================

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeApp);

// Log completion
console.log('📁 JavaScript file loaded successfully!');
console.log('🎯 Functions with parameters and return values: ✅');
console.log('🌐 Global and local scope demonstrations: ✅');
console.log('🎨 CSS animation triggers with JavaScript: ✅');
console.log('📊 Live statistics and performance tracking: ✅');
console.log('🎮 Interactive game and dynamic content: ✅');
console.log('⌨️ Keyboard shortcuts and accessibility: ✅');

// Export functions for potential external use (demonstrates module concepts)
window.DynamicWebExperience = {
    // Mathematical functions
    calculateMath,
    processTextString,
    
    // Animation controls  
    triggerAnimation,
    resetAnimations,
    
    // Utility functions
    generateRandomColorData,
    generateRandomArray,
    
    // Game controls
    startGame,
    resetGame,
    
    // Statistics
    getStatistics: () => ({
        totalClicks: globalClickCounter,
        animationsTriggered: globalAnimationCounter,
        functionsExecuted: globalFunctionCallCounter,
        timeElapsed: Math.floor((Date.now() - startTime) / 1000)
    })
};

console.log('📦 Functions exported to window.DynamicWebExperience object');
/* The above block appears misplaced and should be removed. 
If you intended to animate the calculation result, ensure this logic is inside the correct function (e.g., performCalculation). 
Otherwise, remove this block to fix the syntax error. */

// ============================================================================
// PART 2: TEXT PROCESSING FUNCTIONS WITH RETURN VALUES
// ============================================================================

/**
 * Processes text based on specified operation
 * Demonstrates: String manipulation, parameters, return values
 * @param {string} text - Text to process
 * @param {string} operation - Type of processing
 * @returns {string} - Processed text result
 */
function processTextString(text, operation) {
    globalFunctionCallCounter++;
    
    // Local variables for text processing
    let processedText;
    let additionalInfo = '';
    
    switch(operation) {
        case 'uppercase':
            processedText = text.toUpperCase();
            additionalInfo = ` (${text.length} characters converted)`;
            break;
            
        case 'lowercase':
            processedText = text.toLowerCase();
            additionalInfo = ` (${text.length} characters converted)`;
            break;
            
        case 'reverse':
            processedText = text.split('').reverse().join('');
            additionalInfo = ` (${text.length} characters reversed)`;
            break;
            
        case 'count':
            const wordCount = text.trim().split(/\s+/).length;
            const charCount = text.length;
            const charNoSpaces = text.replace(/\s/g, '').length;
            processedText = `Words: ${wordCount}, Characters: ${charCount}, Characters (no spaces): ${charNoSpaces}`;
            break;
            
        case 'palindrome':
            const cleanText = text.toLowerCase().replace(/[^a-z0-9]/g, '');
            const isPalindrome = cleanText === cleanText.split('').reverse().join('');
            processedText = `"${text}" is ${isPalindrome ? '' : 'NOT '}a palindrome`;
            additionalInfo = ` (cleaned: "${cleanText}")`;
            break;
            
        default:
            processedText = text;
    }
    
    return processedText + additionalInfo;
}

/**
 * Handles text processing button clicks
 * Demonstrates: Function calls with parameters, DOM updates
 * @param {string} operation - Text operation to perform
 */
function processText(operation) {
    globalClickCounter++;
    
    // Local variable - text input value
    const inputText = document.getElementById('textInput').value;
    
    if (!inputText.trim()) {
        showTemporaryMessage('textResult', 'Please enter some text first!', 'error');
        return;
    }
    
    // Call text processing function with parameters
    const result = processTextString(inputText, operation);
    
    // Update DOM with animated result
    const resultElement = document.getElementById('textResult');
    const resultValue = resultElement.querySelector('.result-value');
    
    // Animate the result display
    animateElementUpdate(resultElement, () => {
        resultValue.textContent = result;
    });
    
    updateStatistics();
    console.log(`📝 Text processed with ${operation}: ${result}`);
}

// ============================================================================
// PART 2: SCOPE DEMONSTRATION FUNCTIONS
// ============================================================================

// Global variables for scope demonstration
let globalScopeCounter = 0;
let globalScopeMessage = "Initial global message";

/**
 * Demonstrates variable scope concepts with clear examples
 * Shows: Global vs Local scope, function parameters, return values
 */
function demonstrateScope() {
    globalClickCounter++;
    globalFunctionCallCounter++;
    
    // Modify global variables (global scope access)
    globalScopeCounter++;
    globalScopeMessage = `Updated by function call #${globalScopeCounter}`;
    
    // Local variables (local scope - not accessible outside this function)
    let localVariable = `Local data created at ${new Date().toLocaleTimeString()}`;
    let localCounter = Math.floor(Math.random() * 100);
    
    // Nested function demonstrating scope chain
    function createLocalMessage() {
        // This function has access to:
        // 1. Its own local variables
        // 2. Parent function's local variables (localVariable, localCounter)
        // 3. Global variables (globalScopeCounter, globalScopeMessage)
        
        let nestedLocal = "Nested function variable";
        return `${nestedLocal} | Parent: ${localVariable} | Random: ${localCounter}`;
    }
    
    // Get return value from nested function
    const nestedResult = createLocalMessage();
    
    // Update DOM to show scope examples
    document.getElementById('globalCounter').textContent = globalScopeCounter;
    document.getElementById('globalMessage').textContent = globalScopeMessage;
    document.getElementById('functionReturn').textContent = nestedResult;
    
    // Demonstrate that local variables are not accessible outside function
    document.getElementById('localAccess').textContent = 
        `Local variable exists only within function scope (Random: ${localCounter})`;
    
        // Animate the scope display
        const scopeDisplay = document.getElementById('scopeDisplay');
        scopeDisplay.style.transform = 'scale(1.02)';
        scopeDisplay.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.3)';
        
        setTimeout(() => {
            scopeDisplay.style.transform = 'scale(1)';
            scopeDisplay.style.boxShadow = '';
        }, 300);
    }
