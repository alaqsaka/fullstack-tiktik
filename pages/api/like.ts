// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { client } from '../../utils/client';
import { uuid } from 'uuidv4';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if(req.method === "POST") {
    const {userId, postId, like} = req.body;

    const data = await client
    .patch(postId)
    .setIfMissing({likes: []})
    .insert('after', 'likes[-1]', [
        {
            _key: uuid(),
            _ref: userId
        }
    ])
    .commit()
  }
}
