const express = require('express');
require('dotenv').config();
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');
const cors = require("cors");
const db = require('./config/db');
const setupRouter = require("./routes");
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');



const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const {notFound, handleError} = require('./middleware/ErrorMiddle');


const app = express();
const server = http.createServer(app);
const io = socketIo(server);


const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'DoAn3',
      version: '1.0.0'
    },
    servers: [
      {
        url: 'http://localhost:3001/'
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      }
    }
  },
  apis: [
    './src/routes/*.js',
    './src/controller/*.js',
    './src/middleware/*.js',
    './src/models/*.js',
    './src/config/*.js',
  ]
}

// Sử dụng EJS làm view engine
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// Middleware CORS
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
  credentials: true,
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: "Content-Type,Authorization",
}));

app.use(fileUpload());
// Middleware router
// const productRouter = require('./routes/productRouter');
// const categoriesRouter = require('./routes/categoriesRouter');
// app.use('/api/products', productRouter);
// app.use('/api/categories', categoriesRouter);

db.connect();
//init router 
setupRouter(app);

const space = swaggerJsdoc(options);
app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(space)
)

app.use(notFound);
app.use(handleError);
// io.on('connection', (socket) => {
//   console.log('A new user connected');

//   // Lắng nghe sự kiện khi nhận được tin nhắn từ client và phát lại cho tất cả các client khác
//   socket.on('message', (data) => {
//     console.log('Message received:', data);
    
//     // Phát lại tin nhắn cho tất cả các client kết nối
//     io.emit('message', data);
//   });

//   // Xử lý sự kiện khi client disconnect
//   socket.on('disconnect', () => {
//     console.log('User disconnected');
//   });
// });

// app.get(' ', (req, res) => {
//   res.render('index', { title: 'Home' });
// });

// Khởi động server

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
