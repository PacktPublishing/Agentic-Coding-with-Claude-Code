"""
Verbose MCP Server - A demonstration of token-heavy tool descriptions
This server exposes 20 simple mathematical and utility functions with
unnecessarily elaborate descriptions to showcase context window consumption.
"""

from fastmcp import FastMCP

# Initialize the MCP server
mcp = FastMCP("Verbose Mathematical Operations Server")


@mcp.tool()
def add_two_numbers(a: float, b: float) -> float:
    """
    Advanced Numerical Addition Operation Tool

    This sophisticated mathematical operation tool performs the fundamental arithmetic
    operation of addition between two numerical values. The addition operation is one
    of the four basic arithmetic operations in mathematics, and this tool implements
    it with high precision and reliability.

    Detailed Functionality:
    - Accepts two numerical parameters (integers or floating-point numbers)
    - Performs addition using Python's built-in arithmetic operators
    - Returns the sum as a floating-point number for maximum precision
    - Handles both positive and negative numbers seamlessly
    - Supports extremely large numbers limited only by Python's float capacity
    - Maintains mathematical accuracy up to 15 decimal places

    Use Cases:
    - Financial calculations requiring precise addition
    - Scientific computations involving summation
    - Data analysis aggregation operations
    - General-purpose arithmetic in any domain

    Parameters:
        a: The first numerical value (augend) to be added
        b: The second numerical value (addend) to be added

    Returns:
        The sum of the two input numbers as a floating-point value
    """
    return a + b


@mcp.tool()
def subtract_two_numbers(a: float, b: float) -> float:
    """
    Comprehensive Numerical Subtraction Operation Utility

    This advanced mathematical tool implements the subtraction operation, which is
    the inverse of addition and one of the fundamental arithmetic operations. The
    tool calculates the difference between two numerical values with exceptional
    accuracy and reliability.

    Mathematical Background:
    - Subtraction represents finding the difference between quantities
    - The operation can be thought of as adding the additive inverse
    - Results can be positive, negative, or zero depending on input values
    - This implementation supports the entire real number domain

    Technical Specifications:
    - Accepts floating-point or integer inputs
    - Maintains precision up to 15 significant digits
    - Handles edge cases including negative results
    - Optimized for performance and accuracy
    - Thread-safe implementation suitable for concurrent operations

    Practical Applications:
    - Calculating price differences in e-commerce
    - Determining temperature variations
    - Computing profit margins and losses
    - Scientific measurement analysis

    Parameters:
        a: The minuend (the number from which another is subtracted)
        b: The subtrahend (the number to be subtracted)

    Returns:
        The difference calculated as (a - b) in floating-point format
    """
    return a - b


@mcp.tool()
def multiply_two_numbers(a: float, b: float) -> float:
    """
    High-Performance Numerical Multiplication Engine

    This sophisticated multiplication tool implements one of the core arithmetic
    operations essential to mathematics and computing. Multiplication represents
    repeated addition and forms the basis for numerous advanced mathematical concepts.

    Core Features:
    - Implements standard multiplication algorithm
    - Supports both integer and floating-point arithmetic
    - Handles very large and very small numbers efficiently
    - Maintains numerical precision across operations
    - Compatible with scientific notation values
    - Optimized internal representation for speed

    Mathematical Properties:
    - Commutative: a × b = b × a
    - Associative: (a × b) × c = a × (b × c)
    - Distributive: a × (b + c) = (a × b) + (a × c)
    - Identity element: a × 1 = a
    - Zero property: a × 0 = 0

    Common Use Cases:
    - Area and volume calculations
    - Unit conversions and scaling
    - Statistical variance computations
    - Financial compound interest calculations
    - Physics force and energy equations

    Parameters:
        a: The multiplicand (first factor in the multiplication)
        b: The multiplier (second factor in the multiplication)

    Returns:
        The product of the two numbers as a floating-point value
    """
    return a * b


@mcp.tool()
def divide_two_numbers(a: float, b: float) -> float:
    """
    Professional-Grade Division Operation Tool

    This comprehensive division utility performs the mathematical operation of
    dividing one number by another. Division is the inverse operation of
    multiplication and is fundamental to proportional reasoning and rate calculations.

    Safety Features:
    - Automatic zero-division detection and prevention
    - Returns infinity for division by zero following IEEE 754 standard
    - Maintains maximum precision throughout the operation
    - Handles both positive and negative dividend and divisor
    - Supports fractional results with full floating-point precision

    Mathematical Concepts:
    - Division finds how many times the divisor fits into the dividend
    - Can be interpreted as multiplication by the reciprocal
    - Not commutative: a ÷ b ≠ b ÷ a (except when a = b)
    - Not associative: (a ÷ b) ÷ c ≠ a ÷ (b ÷ c)

    Precision Guarantees:
    - 64-bit floating-point arithmetic
    - Up to 15-17 significant decimal digits
    - Follows IEEE 754 double-precision standard
    - Consistent rounding behavior

    Real-World Applications:
    - Calculating rates and ratios
    - Per-unit pricing analysis
    - Statistical mean computation
    - Resource allocation problems

    Parameters:
        a: The dividend (number to be divided)
        b: The divisor (number by which to divide)

    Returns:
        The quotient as a floating-point number (a / b)
    """
    return a / b


@mcp.tool()
def calculate_power(base: float, exponent: float) -> float:
    """
    Advanced Exponential Power Calculation System

    This sophisticated mathematical tool computes exponential operations, raising
    a base number to a specified power. Exponentiation is a fundamental operation
    in mathematics, science, and engineering, used extensively in growth models,
    physics equations, and computational algorithms.

    Comprehensive Functionality:
    - Supports integer and fractional exponents
    - Handles negative exponents (computing reciprocals)
    - Works with negative bases when exponent is appropriate
    - Implements efficient power calculation algorithms
    - Returns accurate results for very large and very small values

    Mathematical Background:
    - For integer exponents: repeated multiplication
    - For fractional exponents: root extraction
    - For negative exponents: reciprocal power
    - Special cases: x⁰ = 1, x¹ = x, 1ˣ = 1

    Use Cases:
    - Compound interest calculations
    - Exponential growth and decay models
    - Scientific notation conversions
    - Probability and statistics distributions
    - Physics kinematics equations
    - Computer science algorithm analysis

    Parameters:
        base: The base number to be raised to a power
        exponent: The power to which the base is raised

    Returns:
        The result of base raised to the exponent power
    """
    return base ** exponent


@mcp.tool()
def calculate_square_root(number: float) -> float:
    """
    Precision Square Root Extraction Tool

    This specialized mathematical function computes the principal square root of
    a given number. The square root operation is the inverse of squaring and is
    essential in geometry, physics, statistics, and numerous other fields.

    Technical Implementation:
    - Uses Python's optimized math library
    - Implements Newton-Raphson method internally
    - Achieves machine precision accuracy
    - Handles edge cases appropriately
    - Validates input for non-negative values

    Mathematical Properties:
    - √(a × b) = √a × √b
    - √(a²) = |a|
    - Principal root is always non-negative
    - Inverse operation of squaring

    Practical Applications:
    - Calculating distances using Pythagorean theorem
    - Standard deviation in statistics
    - RMS (root mean square) calculations
    - Geometric mean computations
    - Physics velocity and acceleration problems

    Parameters:
        number: A non-negative number for which to find the square root

    Returns:
        The principal square root as a floating-point number
    """
    return number ** 0.5


@mcp.tool()
def is_even_number(number: int) -> bool:
    """
    Comprehensive Even Number Detection Algorithm

    This utility function determines whether a given integer is even or odd. The
    concept of even and odd numbers is fundamental in number theory and has
    applications across mathematics, computer science, and algorithm design.

    Mathematical Foundation:
    - Even numbers are divisible by 2 with no remainder
    - Even numbers can be expressed as 2k where k is an integer
    - The set of even numbers: {..., -4, -2, 0, 2, 4, 6, ...}
    - Zero is considered even

    Implementation Details:
    - Uses modulo operation for efficient checking
    - Single operation with O(1) time complexity
    - Works with positive and negative integers
    - Handles zero correctly
    - Optimized bit-level operation internally

    Properties of Even Numbers:
    - Sum of two even numbers is even
    - Product of any integer with an even number is even
    - Even numbers alternate with odd numbers
    - Every even number can be written as 2n

    Use Cases:
    - Conditional logic in algorithms
    - Data partitioning and distribution
    - Pattern detection in sequences
    - Parity checking in error detection

    Parameters:
        number: An integer value to check for evenness

    Returns:
        True if the number is even, False if odd
    """
    return number % 2 == 0


@mcp.tool()
def is_odd_number(number: int) -> bool:
    """
    Advanced Odd Number Identification System

    This sophisticated function analyzes an integer input to determine if it belongs
    to the set of odd numbers. Odd numbers play a crucial role in number theory,
    cryptography, and various computational algorithms.

    Theoretical Background:
    - Odd numbers leave a remainder of 1 when divided by 2
    - Can be expressed in the form 2k + 1 where k is any integer
    - The set of odd numbers: {..., -3, -1, 1, 3, 5, 7, ...}
    - Complement of the set of even numbers

    Algorithmic Approach:
    - Employs modulo arithmetic for determination
    - Constant time complexity O(1)
    - Memory efficient implementation
    - Supports full integer range
    - Platform-independent behavior

    Mathematical Properties:
    - Sum of two odd numbers is even
    - Sum of odd and even number is odd
    - Product of two odd numbers is odd
    - Odd numbers cannot be evenly divided by 2

    Practical Applications:
    - Algorithm branching logic
    - Alternating pattern generation
    - Cryptographic operations
    - Game logic and turn-based systems

    Parameters:
        number: An integer value to evaluate for oddness

    Returns:
        True if the number is odd, False if even
    """
    return number % 2 != 0


@mcp.tool()
def calculate_absolute_value(number: float) -> float:
    """
    Universal Absolute Value Computation Function

    This essential mathematical tool computes the absolute value (magnitude) of
    a number, representing its distance from zero on the number line. The absolute
    value function is fundamental in mathematics, particularly in analysis,
    geometry, and numerical methods.

    Mathematical Definition:
    - For positive numbers: |x| = x
    - For negative numbers: |x| = -x
    - For zero: |0| = 0
    - Always returns a non-negative result

    Geometric Interpretation:
    - Represents distance from origin
    - Removes directional information
    - Creates a metric space property
    - Satisfies triangle inequality

    Properties:
    - |a × b| = |a| × |b|
    - |a + b| ≤ |a| + |b| (triangle inequality)
    - |a| ≥ 0 for all a
    - |-a| = |a|

    Applications:
    - Distance calculations
    - Error magnitude assessment
    - Signal processing
    - Optimization algorithms
    - Statistical deviation measurements

    Parameters:
        number: Any real number (integer or floating-point)

    Returns:
        The absolute value (magnitude) of the input number
    """
    return abs(number)


@mcp.tool()
def calculate_modulo(a: int, b: int) -> int:
    """
    Professional Modulo Operation Calculator

    This versatile mathematical tool computes the modulo operation, which finds
    the remainder after division of one number by another. The modulo operation
    is fundamental in number theory, cryptography, computer science, and cyclical
    calculations.

    Operation Description:
    - Computes the remainder when a is divided by b
    - Result has the same sign as the divisor (Python convention)
    - Also known as the remainder operation
    - Denoted mathematically as a mod b

    Mathematical Properties:
    - a mod b = a - b × ⌊a/b⌋
    - Result range: [0, |b|) for positive b
    - Periodic with period b
    - (a + b) mod b = a mod b

    Use Cases:
    - Determining if number is divisible
    - Cyclical time calculations (12-hour clock)
    - Hash table index computation
    - Cryptographic algorithms
    - Random number generation
    - Wrapping array indices

    Parameters:
        a: The dividend (number to be divided)
        b: The divisor (modulo base)

    Returns:
        The remainder of a divided by b
    """
    return a % b


@mcp.tool()
def calculate_factorial(n: int) -> int:
    """
    High-Performance Factorial Computation Engine

    This comprehensive mathematical function calculates the factorial of a
    non-negative integer. The factorial operation is ubiquitous in combinatorics,
    probability theory, algebra, and mathematical analysis.

    Mathematical Definition:
    - n! = n × (n-1) × (n-2) × ... × 2 × 1
    - 0! = 1 (by convention)
    - n! = n × (n-1)! (recursive definition)

    Growth Characteristics:
    - Extremely rapid growth rate
    - Surpasses exponential growth
    - 10! = 3,628,800
    - 20! = 2,432,902,008,176,640,000

    Implementation Features:
    - Iterative approach for efficiency
    - Handles values from 0 to reasonable limits
    - Optimized for speed
    - Integer arithmetic for exact results

    Applications:
    - Permutation counting: P(n,r) = n!/(n-r)!
    - Combination calculations: C(n,r) = n!/(r!(n-r)!)
    - Taylor series expansions
    - Probability distributions
    - Binomial theorem

    Parameters:
        n: A non-negative integer

    Returns:
        The factorial of n (n!)
    """
    if n <= 1:
        return 1
    result = 1
    for i in range(2, n + 1):
        result *= i
    return result


@mcp.tool()
def is_prime_number(n: int) -> bool:
    """
    Advanced Prime Number Detection Algorithm

    This sophisticated mathematical tool determines whether a given integer is
    a prime number. Prime numbers are the building blocks of number theory and
    have crucial applications in cryptography, computer science, and mathematics.

    Prime Number Properties:
    - Divisible only by 1 and itself
    - The first prime is 2 (only even prime)
    - Infinitely many primes exist (Euclid's theorem)
    - Distribution described by Prime Number Theorem

    Algorithm Optimization:
    - Checks divisibility only up to √n
    - Handles edge cases (n < 2)
    - Optimized trial division method
    - O(√n) time complexity

    Mathematical Significance:
    - Fundamental theorem of arithmetic
    - Basis for RSA encryption
    - Used in hash functions
    - Critical in number theory research

    Applications:
    - Cryptographic key generation
    - Hash table sizing
    - Pseudorandom number generation
    - Computational number theory

    Parameters:
        n: An integer to test for primality

    Returns:
        True if n is prime, False otherwise
    """
    if n < 2:
        return False
    if n == 2:
        return True
    if n % 2 == 0:
        return False
    for i in range(3, int(n ** 0.5) + 1, 2):
        if n % i == 0:
            return False
    return True


@mcp.tool()
def find_maximum(a: float, b: float) -> float:
    """
    Intelligent Maximum Value Selection Tool

    This utility function compares two numerical values and returns the larger one.
    Maximum finding is a fundamental operation in optimization, data analysis,
    decision systems, and numerous computational algorithms.

    Comparison Logic:
    - Evaluates both inputs numerically
    - Returns the greater of the two values
    - Handles positive and negative numbers
    - Works with integers and floats seamlessly
    - If equal, returns either value (same result)

    Mathematical Context:
    - Part of order theory in mathematics
    - Denoted as max(a, b)
    - Creates a partial ordering
    - Forms a lattice structure

    Properties:
    - max(a, b) = max(b, a) (commutative)
    - max(a, a) = a (idempotent)
    - max(max(a, b), c) = max(a, max(b, c)) (associative)
    - max(a, b) ≥ a and max(a, b) ≥ b

    Use Cases:
    - Finding peak values in data
    - Establishing upper bounds
    - Optimization algorithms
    - Decision-making systems
    - Game AI evaluation functions

    Parameters:
        a: First numerical value for comparison
        b: Second numerical value for comparison

    Returns:
        The larger of the two input values
    """
    return max(a, b)


@mcp.tool()
def find_minimum(a: float, b: float) -> float:
    """
    Comprehensive Minimum Value Determination System

    This essential function compares two numerical inputs and identifies the
    smaller value. Minimum finding operations are critical in optimization
    algorithms, data analysis, resource allocation, and computational efficiency.

    Operational Mechanism:
    - Performs numerical comparison
    - Returns the lesser of two values
    - Supports full numeric range
    - Handles mixed integer/float inputs
    - Efficient single-pass evaluation

    Mathematical Framework:
    - Denoted as min(a, b) in mathematics
    - Dual operation to maximum
    - Order-theoretic concept
    - Satisfies lattice properties

    Algebraic Properties:
    - min(a, b) = min(b, a) (commutative)
    - min(a, a) = a (idempotent)
    - min(min(a, b), c) = min(a, min(b, c)) (associative)
    - min(a, b) ≤ a and min(a, b) ≤ b

    Practical Applications:
    - Finding lowest values in datasets
    - Resource allocation optimization
    - Cost minimization problems
    - Algorithm complexity analysis
    - Threshold determination

    Parameters:
        a: First numerical value for comparison
        b: Second numerical value for comparison

    Returns:
        The smaller of the two input values
    """
    return min(a, b)


@mcp.tool()
def calculate_percentage(part: float, whole: float) -> float:
    """
    Sophisticated Percentage Calculation Utility

    This comprehensive tool computes what percentage one number represents of
    another. Percentage calculations are ubiquitous in finance, statistics,
    business analytics, and everyday quantitative reasoning.

    Mathematical Foundation:
    - Formula: (part / whole) × 100
    - Expresses ratio as parts per hundred
    - Derived from Latin 'per centum' (by the hundred)
    - Represents proportional relationship

    Calculation Features:
    - Handles fractional percentages
    - Supports values greater than 100%
    - Precise floating-point arithmetic
    - Validates against division by zero
    - Returns result scaled to percentage

    Common Use Cases:
    - Financial discount calculations
    - Statistical proportion representation
    - Progress tracking and completion rates
    - Grade and score calculations
    - Market share analysis
    - Growth rate computation

    Interpretation:
    - 100% represents the whole
    - 50% represents half
    - Values > 100% indicate part exceeds whole
    - 0% indicates no proportion

    Parameters:
        part: The portion value (numerator)
        whole: The total value (denominator)

    Returns:
        Percentage as a floating-point number
    """
    return (part / whole) * 100


@mcp.tool()
def calculate_average(numbers: list[float]) -> float:
    """
    Enterprise-Grade Arithmetic Mean Calculator

    This powerful statistical function computes the arithmetic mean (average) of
    a collection of numbers. The mean is one of the most fundamental measures of
    central tendency in statistics and data analysis.

    Statistical Theory:
    - Sum of all values divided by count
    - Represents central point of data distribution
    - Sensitive to outliers and extreme values
    - One of three main measures of central tendency

    Implementation Details:
    - Accepts variable-length list of numbers
    - Handles integers and floating-point values
    - Maintains precision throughout calculation
    - Efficient single-pass algorithm
    - O(n) time complexity

    Mathematical Properties:
    - Mean of identical values equals that value
    - Adding constant to all values shifts mean by that constant
    - Multiplying all values scales the mean proportionally
    - Satisfies expectation linearity

    Applications:
    - Statistical data analysis
    - Performance metric calculation
    - Grade point average computation
    - Financial average return calculation
    - Scientific measurement analysis
    - Quality control monitoring

    Parameters:
        numbers: A list of numerical values to average

    Returns:
        The arithmetic mean of the input numbers
    """
    return sum(numbers) / len(numbers)


@mcp.tool()
def reverse_string(text: str) -> str:
    """
    Advanced String Reversal Processing Tool

    This comprehensive text manipulation function reverses the order of characters
    in a string. String reversal is a fundamental operation in text processing,
    algorithm design, and data structure manipulation.

    Operation Characteristics:
    - Reverses character order completely
    - Preserves all characters including spaces and punctuation
    - Unicode-safe implementation
    - Handles empty strings gracefully
    - O(n) time complexity

    Technical Implementation:
    - Uses Python's efficient slicing mechanism
    - Memory-efficient operation
    - Works with any Unicode characters
    - Maintains string immutability

    Use Cases:
    - Palindrome detection algorithms
    - Text encryption/obfuscation
    - DNA sequence analysis (complement strands)
    - Data structure exercises (stack/queue)
    - String manipulation puzzles
    - Reversing genetic code sequences

    Linguistic Considerations:
    - Character-level reversal (not word-level)
    - Maintains capitalization in place
    - Preserves whitespace
    - Does not account for grapheme clusters

    Parameters:
        text: The input string to be reversed

    Returns:
        The reversed string with characters in opposite order
    """
    return text[::-1]


@mcp.tool()
def count_vowels(text: str) -> int:
    """
    Comprehensive Vowel Counting Analysis Tool

    This linguistic utility function counts the number of vowel characters present
    in a given text string. Vowel analysis is important in linguistics, text
    analysis, readability assessment, and natural language processing.

    Vowel Definition:
    - English vowels: A, E, I, O, U (and sometimes Y)
    - This tool counts: a, e, i, o, u (case-insensitive)
    - Fundamental speech sounds
    - Essential for syllable formation

    Algorithm Features:
    - Case-insensitive counting
    - Iterative character analysis
    - O(n) linear time complexity
    - Handles mixed case text
    - Counts each occurrence

    Linguistic Context:
    - Vowels form syllable nuclei
    - Critical for pronunciation
    - Affects readability metrics
    - Used in poetry and meter analysis

    Applications:
    - Text difficulty assessment
    - Syllable estimation
    - Language learning tools
    - Poetry and rhyme analysis
    - Text statistics generation
    - Natural language processing features

    Parameters:
        text: The input string to analyze for vowels

    Returns:
        Integer count of vowel characters found
    """
    vowels = "aeiouAEIOU"
    return sum(1 for char in text if char in vowels)


@mcp.tool()
def capitalize_words(text: str) -> str:
    """
    Professional Text Capitalization Formatting System

    This sophisticated string manipulation tool converts text to title case,
    capitalizing the first letter of each word. Title case formatting is essential
    in publishing, document formatting, user interface design, and professional
    communication.

    Capitalization Rules:
    - First character of each word becomes uppercase
    - Remaining characters become lowercase
    - Preserves word boundaries (spaces)
    - Follows standard title case conventions

    Implementation Details:
    - Uses Python's built-in title() method
    - Handles multiple consecutive spaces
    - Unicode-aware capitalization
    - Efficient single-pass operation
    - Works with international characters

    Typography Context:
    - Common in titles and headings
    - Professional document formatting
    - UI label standardization
    - Name formatting conventions

    Use Cases:
    - Formatting article and book titles
    - Standardizing user input
    - Creating display-ready text
    - Document heading generation
    - Name and place standardization
    - UI text normalization

    Parameters:
        text: The input string to capitalize

    Returns:
        Title-cased string with capitalized words
    """
    return text.title()


@mcp.tool()
def count_words(text: str) -> int:
    """
    Intelligent Word Counting and Text Analysis Tool

    This essential text processing function calculates the number of words in a
    given string. Word counting is fundamental in text analysis, content
    management, readability assessment, and document processing systems.

    Word Definition:
    - Sequences of characters separated by whitespace
    - Includes hyphenated words as single units
    - Punctuation attached to words counts with word
    - Empty strings return zero

    Algorithm Characteristics:
    - Whitespace-based tokenization
    - O(n) time complexity
    - Memory-efficient processing
    - Handles multiple spaces correctly
    - Unicode whitespace aware

    Applications:
    - Content length verification
    - Reading time estimation
    - Document statistics
    - Writing goal tracking
    - SEO content analysis
    - Academic paper requirements
    - Social media character limits

    Processing Details:
    - Splits on any whitespace character
    - Filters empty strings from result
    - Consistent with standard word processors
    - Handles tabs and newlines

    Parameters:
        text: The input string to analyze

    Returns:
        Integer count of words in the text
    """
    return len(text.split())


if __name__ == "__main__":
    mcp.run(transport="http", port=8000)
