# Define a method that accepts two arguments, a string and an integer. The method should return a copy of the string with the nth letter removed.
def remove_nth_letter(string, n)
 p  new_string = string.clone.chars
    new_string.delete_at(n)
    new_string.join
  # string.split('').delete_at(n)
  # string.delete(string[n]) incorrect because it will delete duplicates
end

p remove_nth_letter('hello', 3)

# Define a method that chunks an array into a nested array of sub-arrays of length n.
# The last array may be of length less than n if the original array's size does not divide evenly by n.
# chunk([1,2,3,4,5], 2) => [[1,2], [3,4], [5]]
def chunk(array, n)
  # new_array = []
  new_array1 = []  #chunked array
  new_array2 = [] #result arrray

  array.each do |el|
    if new_array1.length == 2
      new_array2 << new_array1
      new_array1 = []
    end
    new_array1 << el
  end
  new_array2 << new_array1
end

p chunk([1,2,3,4,5], 2)


# Define a method that multiplies the frequencies of the periods, commas,
 # hyphens, semicolons, question marks, and exclamation points in a given string and returns the product.
 # If any punctuation does not occur, don't include it in the product, i.e., don't multiply by zero!
def product_punctuation(str)

  p new_hash  = Hash.new(0)
  # p new_hash2 = {}
  str.split("").each do |el|
    if ",.-;?!".include?(el)
      new_hash[el] += 1
    end
  end
  new_hash.values.reduce(:*)
end

p product_punctuation("hello!,.");
# Translate a sentence into pig-latin! The first consonants go to the end of the word, then add "ay".
def pig_latin(sentence)
  

end

def latinize(word)

end

# require_relative 'test.rb'
