import math

def calculate_area(shape, *args):
    if shape.lower() == "circle":
        radius = args[0]
        area = math.pi * radius ** 2
    elif shape.lower() == "rectangle":
        length, width = args
        area = length * width
    elif shape.lower() == "square":
        side = args[0]
        area = side ** 2
    else:
        area = None
    return area

if __name__ == "__main__":
    shape = input("Enter the shape (circle, rectangle, square): ")
    if shape.lower() in ["circle", "rectangle", "square"]:
        if shape.lower() == "circle":
            radius = float(input("Enter the radius of the circle: "))
            area = calculate_area(shape, radius)
        elif shape.lower() == "rectangle":
            length = float(input("Enter the length of the rectangle: "))
            width = float(input("Enter the width of the rectangle: "))
            area = calculate_area(shape, length, width)
        elif shape.lower() == "square":
            side = float(input("Enter the side length of the square: "))
            area = calculate_area(shape, side)
        print("Area of the", shape.lower(), "is:", area)
    else:
        print("Invalid shape entered!")
