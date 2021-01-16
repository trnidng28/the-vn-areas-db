import prisma from '~/lib/prisma'
import { NextApiHandler } from 'next'

const handler: NextApiHandler = async (req, res) => {
  const area = await prisma.area.findUnique({
    where: {
      id: +req.query.id
    },
    select: {
      id: true,
      name: true,
      unit: true,
      parentArea: {
        select: {
          id: true,
          name: true,
          unit: true,
          parentArea: {
            select: {
              id: true,
              name: true,
              unit: true
            }
          }
        }
      },
      subAreas: {
        select: {
          id: true,
          name: true,
          unit: true,
          subAreas: {
            select: {
              id: true,
              name: true,
              unit: true
            }
          }
        }
      }
    }
  })

  res.json(area)
}

export default handler