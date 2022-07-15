// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { client } from '../../../utils/client';
import { postDetailQuery } from '../../../utils/queries';



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if(req.method === "GET") {
    // Nilai id ini didapet dari halaman detail atau [id].tsx
    // Pas manggil fungsi getServerSideProps
    const {id} = req.query;

    const query = postDetailQuery(id)

    const data = await client.fetch(query)

    res.status(200).json(data[0]);
  }
}
