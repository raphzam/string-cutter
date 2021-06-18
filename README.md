# string-cutter

A simple web application that accepts a POST request to the route '/test' which accepts one string argument and returns a JSON object containing a return string containing every third letter from the original string

# aws lambda implementation
Send a POST containing a JSON Object with one parameter 'string_to_cut' to the API endpoint: https://7jsocit698.execute-api.us-east-1.amazonaws.com/default/everythirdletter-api/test
