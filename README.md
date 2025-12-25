# Static Image Serving API 

This assignment extends an existing Node.js and Express backend by adding a Static Image Serving API. 
The API enables clients to retrieve image files stored on the server using HTTP requests. 
It follows RESTful principles and ensures secure file handling, correct response headers, and proper error handling.

# Objectives
- Extend an existing Node.js + Express project
- Serve static image files via an API
- Maintain existing middleware and configuration
- Handle invalid and missing image requests securely
- Test functionality using browser and Postman

# Structure
backend/
├── server.js
├── routes/
│   └── imageRoutes.js
├── images/
│   ├── img1.jpg
│   ├── img2.png
│   ├── img3.jpeg
│   ├── img4.jpg
│   ├── img5.png
│   ├── img6.jpeg
│   ├── img7.jpg
│   ├── img8.png
│   ├── img9.jpeg
│   ├── img10.jpg

Image Storage
Images are stored in a dedicated /images directory. A minimum of 10 image files are included.
Supported formats include JPG, JPEG, and PNG.

API Endpoint Details
-GET /images/:imageName

Description:
Retrieves and serves an image file from the server.

Parameters:
imageName – Name of the image file including extension

Success Response:
Status Code: 200 OK
Response: Image file with appropriate Content-Type header

Error Responses:
404 Not Found – Image does not exist
400 Bad Request – Invalid file name

Sample Requests
Browser:
http://localhost:5000/images/image1.jpg

Postman:
GET http://localhost:5000/images/image5.png

Missing Image:
http://localhost:5000/images/unknown.jpg

Security Measures
- Prevents directory traversal attacks
- Validates file existence before response
- Rejects invalid file names

Execution Steps

1. Navigate to backend folder
2. Run npm install
3. Start server using node server.js
4. Access API using browser or Postman

Conclusion
The Static Image Serving API has been successfully implemented and tested. 
The project meets all assignment requirements and follows best practices.

Netlify Link :
bespoke-gecko-14eec3.netlify.app
