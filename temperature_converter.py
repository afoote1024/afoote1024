#!/usr/bin/env python3
"""
Temperature Converter
Converts between Celsius and Fahrenheit
"""

def celsius_to_fahrenheit(celsius):
    """Convert Celsius to Fahrenheit"""
    return (celsius * 9/5) + 32

def fahrenheit_to_celsius(fahrenheit):
    """Convert Fahrenheit to Celsius"""
    return (fahrenheit - 32) * 5/9

def main():
    print("Temperature Converter")
    print("=" * 40)

    while True:
        try:
            # Get temperature value
            temp_input = input("\nEnter temperature value (or 'q' to quit): ")

            if temp_input.lower() == 'q':
                print("Goodbye!")
                break

            temperature = float(temp_input)

            # Get temperature unit
            print("\nSelect unit:")
            print("1. Celsius (C)")
            print("2. Fahrenheit (F)")
            unit = input("Enter 1 or 2 (or C/F): ").strip().upper()

            # Perform conversion
            if unit in ['1', 'C']:
                result = celsius_to_fahrenheit(temperature)
                print(f"\n{temperature}°C = {result:.2f}°F")
            elif unit in ['2', 'F']:
                result = fahrenheit_to_celsius(temperature)
                print(f"\n{temperature}°F = {result:.2f}°C")
            else:
                print("Invalid unit selection. Please enter 1, 2, C, or F.")
                continue

        except ValueError:
            print("Invalid input. Please enter a numeric value for temperature.")
        except KeyboardInterrupt:
            print("\n\nGoodbye!")
            break

if __name__ == "__main__":
    main()
