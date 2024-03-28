#include <iostream>
#include <fstream>
using namespace std;

int main() {
    ofstream outfile("example.txt"); // Create a file for writing
    if (outfile.is_open()) {
        outfile << "Hello, World!\n";
        outfile << "This is a C++ file handling example.\n";
        outfile.close();
        cout << "File 'example.txt' created successfully!" << endl;
    } else {
        cout << "Unable to open file!" << endl;
    }

    ifstream infile("example.txt"); // Open the file for reading
    if (infile.is_open()) {
        string line;
        while (getline(infile, line)) {
            cout << line << endl;
        }
        infile.close();
    } else {
        cout << "Unable to open file!" << endl;
    }

    return 0;
}
