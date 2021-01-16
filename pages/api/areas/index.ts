import prisma from '~/lib/prisma'
import { NextApiHandler } from 'next'

const handler: NextApiHandler = async (req, res) => {
  const { skip, limit, ...where } = req.query

  const areas = await prisma.area.findMany({
    skip: +skip || undefined,
    take: + limit || undefined,
    where,
    select: {
      id: true,
      name: true,
      unit: true
    }
  })

  res.json(areas)
}

export default handler