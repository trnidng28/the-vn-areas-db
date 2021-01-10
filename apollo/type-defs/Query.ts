import {
  objectType,
  intArg,
  nonNull,
  stringArg,
  nullable
} from 'nexus'
import prisma from '../../lib/prisma'

const Query = objectType({
  name: 'Query',
  definition(t) {
    t.list.field('areas', {
      type: 'Area',
      args: {
        keyword: nullable(stringArg())
      },
      resolve: (_parent, args, _ctx) => {
        return prisma.area.findMany({
          take: args.keyword ? 10 : undefined,
          where: args.keyword ? {
            nameAscii: {
              startsWith: args.keyword,
              mode: 'insensitive'
            }
          } : {
            parentId: null
          },
        })
      }
    })
    t.field('area', {
      type: 'Area',
      args: {
        areaId: nonNull(intArg()),
      },
      resolve: (_parent, args, _ctx) => {
        return prisma.area.findUnique({
          where: { id: args.areaId },
        })
      }
    })
  }
})

export default Query