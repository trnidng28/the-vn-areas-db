import {
  objectType,
  intArg,
  nonNull
} from 'nexus'
import prisma from '~/lib/prisma'

const Query = objectType({
  name: 'Query',
  definition(t) {
    t.list.field('areas', {
      type: 'Area',
      resolve: (_parent, _args, _ctx) => {
        return prisma.area.findMany({
          where: { parentId: null },
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