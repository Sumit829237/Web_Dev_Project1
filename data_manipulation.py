# Data Preparation
persons = [
    {"name": "John", "age": 30, "city": "New York"},
    {"name": "Alice", "age": 22, "city": "San Francisco"},
    {"name": "Bob", "age": 25, "city": "Los Angeles"}
]

# Filtering
persons_under_25 = [person for person in persons if person["age"] < 25]

# Sorting
sorted_persons = sorted(persons_under_25, key=lambda x: x["city"])

# Output
for person in sorted_persons:
    print(f"Name: {person['name']}, Age: {person['age']}, City: {person['city']}")
