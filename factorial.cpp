/**
 * @file factorial.cpp
 * @brief A program to calculate the factorial of a number.
 * @author Your Name
 * @date 2025-01-28
 */

#include <iostream>

/**
 * @brief Calculates the factorial of a number.
 *
 * This function computes the factorial of a given non-negative integer
 * using a recursive approach.
 *
 * @param n The number whose factorial is to be calculated (n >= 0).
 * @return The factorial of the number n.
 */
unsigned long long factorial(int n) {
    if (n == 0 || n == 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

/**
 * @brief The main function of the program.
 *
 * Prompts the user to enter a non-negative integer and computes
 * the factorial using the factorial() function.
 *
 * @return int Returns 0 if the program executes successfully.
 */
int main() {
    int number;

    std::cout << "Enter a non-negative integer: ";
    std::cin >> number;

    if (number < 0) {
        std::cerr << "Error: Factorial is not defined for negative integers.\n";
        return 1;
    }

    std::cout << "Factorial of " << number << " is " << factorial(number) << "\n";

    return 0;
}

