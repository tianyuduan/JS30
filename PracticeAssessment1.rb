# Define a method that returns a boolean indicating whether its second argument is a substring of its first.
def substring?(long_string, short_string)
  long_string.include?(short_string)
end
 p substring?('long_string', 'short_string')

# Write a method that, given a string, returns a hash in which each key is a character in the string and each value is an array of the first and last indices where that character occurs. If the character occurs only once, the array should contain a single index. Consider defining helper methods.
# first_last_indices("banana") => {"b" => [0], "a" => [1, 5], "n" => [2, 4]}
# def first_last_indices(str)
#   hash = Hash.new
#   letters = str.split("")
#
#   letters.each do |i|
#     hash[i] = []
#   end
#
#   hash.each_with_index do |i, idx|
#     hash[letters[idx]] << idx
#   end
#
#   p hash
# end

def first_last_indices(str)
  results = Hash.new(0)
  str.each_char do |char|
    p results[char] = [first_occurence(str, char)]
    results[char] << last_occurence(str, char) if last_occurence(str, char) != first_occurence(str, char)
  end
results
end

def first_occurence(word, letter)
  word.index(letter)
end

def last_occurence(word, letter)
  (word.length)-(word.reverse.index(letter)+1)
end
p first_last_indices("banana")
# Define a method that returns the number of times that two adjacent numbers in an array sum to n. Don't reuse numbers.
# count_adjacent_sums([1, 5, 1, 3, 3], 6) => 2
def count_adjacent_sums(array, n)
  count = 0
  array.each_with_index do |i, idx |
    # if array[idx] + array[idx + 1] == n
    #   count++
    # end
    count += 1 if array[idx] + array[idx + 1] == n
  end
  count
end

# count_adjacent_sums([1, 5, 1, 3, 3], 6)
arr = [1, 5, 1, 3, 3]
p arr[10]

# require_relative 'test.rb'
