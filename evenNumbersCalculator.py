def find_even_numbers(sequence):
    even_numbers = [num for num in sequence if num % 2 == 0]
    return even_numbers

if __name__ == "__main__":
    sequence = [int(x) for x in input("Enter the sequence of numbers separated by spaces: ").split()]
    even_numbers = find_even_numbers(sequence)
    print("Even numbers in the sequence:", even_numbers)
