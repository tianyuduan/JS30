# Define a method that accepts two arguments, a string and an integer. The method should return a copy of the string with the nth letter removed.
def remove_nth_letter(string, n)
string.delete(string[n])
end

# Define a method that chunks an array into a nested array of sub-arrays of length n. The last array may be of length less than n if the original array's size does not divide evenly by n.
# chunk([1,2,3,4,5], 2) => [[1,2], [3,4], [5]]
# chunk([1,2,3,4,5], 2) => [[1,2], [3,4], [5]]
def chunk(array, n)

  array1 = []
  array2 = []
  array.each do |el|
     if   array1.length == n
       array2 << array1
       array1 = []
     end
      array1 << el
  end
   array2 << array1
end


# Define a method that multiplies the frequencies of the periods, commas, hyphens, semicolons, question marks, and exclamation points in a given string and returns the product. If any punctuation does not occur, don't include it in the product, i.e., don't multiply by zero!
def product_punctuation(str)
  new_hash = Hash.new(0)
str.chars.each do |punct|
  new_hash[punct] += 1 if ",.-;?!".include?(punct)
end
  new_hash.values.reduce(:*)
end

# Translate a sentence into pig-latin! The first consonants go to the end of the word, then add "ay".
# Translate a sentence into pig-latin! The first consonants go to the end of the word, then add "ay".
def pig_latin(sentence)
  sentence1 = ""
  sentence.split.each do |i|
   sentence1 += latinize(i) + " "
  end
  sentence1[1...-1]
end

def latinize(word)
 vowels = "aeiou"

   while ! vowels.include?(word[0].downcase)
 word = word[0..-1] + word[0]

 end
   word +"ay"

end

require_relative 'test.rb'
