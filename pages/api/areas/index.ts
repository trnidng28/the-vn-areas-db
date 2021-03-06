import prisma from '~/lib/prisma'
import { NextApiHandler } from 'next'
import { formatQuery } from '~/utils'

const handler: NextApiHandler = async (req, res) => {
  const { skip, limit, ...query } = req.query

  const areas = await prisma.area.findMany({
    skip: +skip || undefined,
    take: + limit || undefined,
    where: formatQuery(query),
    select: {
      id: true,
      name: true,
      unit: true
    }
  })

  res.json(areas)
}

export default handler