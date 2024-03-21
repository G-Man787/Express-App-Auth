# msd-2022-spring-booster-seminar-1
# Build a backend application for an ecommerce system
# First (2 days): Init and create simple API
1. Create a backend application using express to manage products. Each product includes id, name, price. 
2. Implement CRUD(create, read, update, delete) products.
3. Our system only allows adding a product with a price less than 1000. Create a middleware to handle this
4. Create error handlers

# Second (2 days): Manage users & Auth
1. Add a login feature which username and password. If logged in successfully, return JWT, otherwise, error message.
2. For all requests to get products's information, users must be authenticated. If call APIs without JWT, return 401 unauthorized. With incorrect JWT, return 403 Forbidden. Only with correct, return JSON data. Using middleware to implement this
3.  Create CRUD for managing users
4.  Hashing the password before saving to DB

# Third (1.5 days): Advanced function
1.  Create the api to return the 10 latest products
2. Each user has a role (customer or admin). A customer can only view products. Admin can view, update, and create products.
3. After login, customers can buy products. Please create an API for checkout 
4. In the access token, add the expiration time by 5 minutes. If the token is expired, just let users know and ask them to login again.
