// require("dotenv").config();
// const mongoose = require("mongoose");
// const Product = require('./models/productModel');
// const Service = require('./models/serviceModel');
// const Research = require('./models/researchModel');
// const Admin = require("./models/adminModel"); // Adjust the path to your schema file
// const bcrypt = require("bcrypt");

// const servicesData = [
//     {
//       title: "Mimicking the Mind's Eye: AI-Driven Methodologies for Rorschach-Inspired Image Interpretation",
//       year: 2024,
//       type: "Conference Paper",
//       description: "This conference paper explores the integration of image captioning models with visual question answering systems for analyzing Rorschach test images, uncovering hidden personality traits.",
//       doi: "https://doi.org/10.1007/978-981-97-4149-6_18"
//     },
//     {
//       title: "Intelligent Traffic Management Using VANET Simulations with 6G for Smart Traffic Management",
//       year: 2024,
//       type: "Book Chapter",
//       description: "This book chapter delves into integrating VANETs with 6G technologies to enhance traffic flow using machine learning and computer vision.",
//       doi: "https://www.taylorfrancis.com/chapters/edit/10.1201/9781003522003-20/intelligent-traffic-management-usingvanet-simulations-6g-smarttraffic-management-mohd-mohsin-ali-ayushman-pranav-manish-raj"
//     },
//     {
//       title: "A Comparative Analysis of Optimized Routing Protocols for High-Performance Mobile Ad Hoc Networks",
//       year: 2024,
//       type: "Research Paper",
//       description: "This paper evaluates routing algorithms like Bellman-Ford, Dijkstra, and Genetic algorithms in MANETs. The study focuses on performance metrics like bandwidth, mobility, transmission power, and battery capacity.",
//       doi: "https://doi.org/10.1007/978-981-97-0892-5_7"
//     },
//     {
//       title: "The Contribution of Artificial Intelligence to Drug Discovery: Current Progress and Prospects for the Future",
//       year: 2024,
//       type: "Book Chapter",
//       description: "This book chapter discusses AI's transformative role in drug discovery, emphasizing advancements and the potential for revolutionizing traditional methodologies.",
//       doi: "https://doi.org/10.1007/978-981-99-9621-6_1"
//     },
//     {
//       title: "An Efficient Approach for Detecting Neurological Tumors Using Deep Learning",
//       year: 2023,
//       type: "Conference Paper",
//       description: "Presented at ICERCS, this paper introduces a deep learning-based method for detecting neurological tumours, aiming to improve diagnostic accuracy and efficiency.",
//       doi: "https://ieeexplore.ieee.org/document/10434213/"
//     }
//   ];

// Function to insert data
//   async function seedDatabase(data) {
//         try {
//           // Make sure your database is connected
//           await mongoose.connect(process.env.DB_URL, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//           });

//           // Insert the data
//           await Research.insertMany(data);

//           console.log('Data seeded successfully!');
//         } catch (error) {
//           console.error('Error seeding data:', error);
//         } finally {
//           // Close the connection
//           mongoose.connection.close();
//         }
//       }

//   seedDatabase(servicesData);

// async function createAdmin() {
//   try {
//     await mongoose.connect(process.env.DB_URL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });

//     const hashedPassword = await bcrypt.hash("testuser123@", 10);
//     const admin = new Admin({
//       name: "Test",
//       username: "testuser123",
//       password: hashedPassword,
//     });

//     await admin.save();
//     console.log("Admin created successfully:", admin);
//   } catch (error) {
//     console.error("Error creating admin:", error);
//   } finally {
//     mongoose.connection.close();
//   }
// }

// createAdmin();
