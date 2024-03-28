def count_vowels_consonants(string):
    vowels = "aeiouAEIOU"
    vowel_count = sum(1 for char in string if char in vowels)
    consonant_count = len(string) - vowel_count
    return vowel_count, consonant_count
    


vowels, consonants = count_vowels_consonants("yellow")
print("Vowels:", vowels)
print("Consonants:", consonants)
