import { makeSchema } from 'nexus'
import path from 'path'

const types = [
  require('./type-defs/Query'),
  require('./type-defs/Mutation'),
  require('./type-defs/Post'),
  require('./type-defs/User'),
  require('./type-defs/GQLDate')
]

const schema = makeSchema({
  types,
  outputs: {
    typegen: path.join(process.cwd(), 'nexus-schema/nexus-typegen.ts'),
    schema: path.join(process.cwd(), 'nexus-schema/schema.graphql'),
  },
})

export default schema