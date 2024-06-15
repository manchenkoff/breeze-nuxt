import { FetchError } from 'ofetch'
import type { FormError } from '#ui/types'

const VALIDATION_ERROR_CODE = 422
const SERVER_ERROR_CODE = 500

function mapLaravelErrorsIntoFormErrors(errors: Record<string, string[]>): FormError[] {
  return Object
    .entries(errors)
    .map(([key, messages]) => ({
      path: key,
      message: messages[0] ?? '',
    }))
}

export const useSanctumError = (error: unknown) => {
  const isFetchError = error instanceof FetchError
  const isValidationError
        = isFetchError && error.response?.status === VALIDATION_ERROR_CODE

  const code = isFetchError ? error.response?.status : SERVER_ERROR_CODE

  const bag = isValidationError
    ? mapLaravelErrorsIntoFormErrors(error.response?._data.errors)
    : []

  return {
    isValidationError,
    code,
    bag,
  }
}
