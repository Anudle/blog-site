import { MongoClient, ServerApiVersion } from "mongodb";
function connectToServer() {
  const uri = `mongodb+srv://anu:${process.env.REACT_APP_MONGO_KEY}@cluster0.7wpqgnq.mongodb.net/?retryWrites=true&w=majority`;
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
  });
  return client;
}

async function connectToCollection(client, dbName, collection) {
  await client.connect();
  const db = await client.db(dbName);
  return db.collection(collection);
}

async function handler(req, res) {
  const client = await connectToServer();
  const dbName = "test";
  const collection = "messages";
  if (req.method === "POST") {
    const { email, name, message } = req.body;
    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() == ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }
    const newMessage = {
      email,
      name,
      message,
    };
    async function run() {
      try {
        const col = await connectToCollection(client, "test", "messages");
        await col.insertOne(newMessage);
        res.status(200).json({ message: "new message" });
      } catch (error) {
        console.log(error);
        res
          .status(500)
          .json({ message: "could not connect to database", error });
      } finally {
        await client.close();
      }
    }
    run().catch(console.dir);
  }
}

export default handler;
