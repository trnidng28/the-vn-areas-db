import { asNexusMethod } from 'nexus'
import { GraphQLDate } from 'graphql-iso-date'

const GQLDate = asNexusMethod(GraphQLDate, 'date')

export default GQLDate