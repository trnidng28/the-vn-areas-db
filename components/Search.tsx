import { useCallback, useMemo, useRef, useState } from 'react'
import { StatefulSelect, TYPE, OnChangeParams } from 'baseui/select'
import { useQuery } from '@apollo/client'
import { GET_AREAS, AreasData, AreasVars } from '~/gql/queries'
import Router from 'next/router'

export default function Search() {
  const [keyword, setKeyword] = useState('')
  const { loading, data } = useQuery<AreasData, AreasVars>(GET_AREAS, { variables: { keyword } })

  const timer = useRef(null)
  const handleInputChange = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    if (timer.current) clearTimeout(timer.current)
    const keyword = e.currentTarget.value.trim()
    timer.current = setTimeout(() => setKeyword(keyword), 100)
  }, [])

  const handleChange = useCallback((params: OnChangeParams) => {
    if (params.value.length > 0) {
      Router.push('/' + params.value[0].id)
    }
  }, [])

  const options = useMemo(() => {
    if (!data) return []
    return data.areas
  }, [data])

  return (
    <StatefulSelect
      labelKey='name'
      valueKey='id'
      placeholder='Search area'
      maxDropdownHeight='300px'
      type={TYPE.search}
      filterOptions={options => options}
      isLoading={loading}
      options={options}
      onInputChange={handleInputChange}
      onChange={handleChange}
    />
  )
}