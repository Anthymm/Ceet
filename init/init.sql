CREATE TABLE users(
  userid uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  username VARCHAR(255),
  password VARCHAR(255),
  email VARCHAR(255),
  age INT,
  CARS VARCHAR(255) []
);

CREATE TABLE events(
  eventid SERIAL PRIMARY KEY,
  eventtitle VARCHAR(255),
  host VARCHAR(255),
  location VARCHAR(255),
  date DATE,
  interested INT
);

INSERT INTO users (username, password, email, age)
VALUES ('Demo', 'Demo', 'Demo@Demo.com', 20);

INSERT INTO events (eventtitle, host, location, date, interested)
VALUES ('Fest', 'Stora Holm', 'Göteborg', '2021-01-01', 1);
