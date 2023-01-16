import { connectToDatabase } from "../../util/mongodb";

export default async function handler(req, res) {
  const { db } = await connectToDatabase();

  // insert query parameters that we "fetch" in index.js record()
  const data = req.query;

  const response = await db.collection("feedback").updateOne(
    { area: data[0], feedback: data[1] },
    {
      $set: {
        thumb: 100,
      },
    }
  );

  res.json(response);
}
