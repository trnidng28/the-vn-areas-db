import { objectType } from 'nexus'
import prisma from '~/lib/prisma'

const Area = objectType({
  name: 'Area',
  definition(t) {
    t.nonNull.int('id')
    t.nonNull.string('code')
    t.nonNull.string('name')
    t.nonNull.string('unit')
    t.nullable.int('parentId')
    t.nonNull.boolean('isArchived')
    t.nullable.field('parentArea', {
      type: 'Area',
      resolve: (parent) =>
        prisma.area
          .findOne({
            where: { id: Number(parent.id) },
          })
          .parentArea(),
    })
    t.list.field('subAreas', {
      type: 'Area',
      resolve: (parent) =>
        prisma.area
          .findOne({
            where: { id: Number(parent.id) },
          })
          .subAreas()
    })
  },
})

export default Area