import { objectType } from 'nexus'
import prisma from '~/lib/prisma'

const Post = objectType({
  name: 'Post',
  definition(t) {
    t.int('id')
    t.string('title')
    t.nullable.string('content')
    t.boolean('published')
    t.nullable.field('author', {
      type: 'User',
      resolve: (parent) =>
        prisma.post
          .findOne({
            where: { id: Number(parent.id) },
          })
          .author(),
    })
  },
})

export default Post