CREATE TABLE MotionPictures (
	ID INT identity(1,1) PRIMARY KEY NOT NULL,
	Name NVARCHAR(50) NOT NULL,
	Description NVARCHAR(500),
	ReleaseYear INT NOT NULL
	);

INSERT INTO dbo.MotionPictures
VALUES ('The Social Network', 'As Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook, he is sued by the twins who claimed he stole their idea, and by the co-founder who was later squeezed out of the business.', '2010');

INSERT INTO dbo.MotionPictures
VALUES ('The Dark Night', 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.', '2008');

INSERT INTO dbo.MotionPictures
VALUES ('Pulp Fiction', 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.', '1994');

INSERT INTO dbo.MotionPictures
VALUES ('Forrest Gump', 'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.', '1994');

INSERT INTO dbo.MotionPictures
VALUES ('Inception', 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.', '2010');


select * from dbo.MotionPictures

/*Test Delete*/
DELETE FROM dbo.MotionPictures WHERE ID = '5'