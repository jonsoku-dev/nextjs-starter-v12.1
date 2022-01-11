/**
 * @generated SignedSource<<9cc20e700d51b29dfe93faed74bfb6c2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime'
export type pages_listFilmsQuery$variables = {
  limit?: number | null
}
export type pages_listFilmsQueryVariables = pages_listFilmsQuery$variables
export type pages_listFilmsQuery$data = {
  readonly launchesPast: ReadonlyArray<{
    readonly id: string | null
  } | null> | null
}
export type pages_listFilmsQueryResponse = pages_listFilmsQuery$data
export type pages_listFilmsQuery = {
  variables: pages_listFilmsQueryVariables
  response: pages_listFilmsQuery$data
}

const node: ConcreteRequest = (function () {
  var v0 = [
      {
        defaultValue: 10,
        kind: 'LocalArgument',
        name: 'limit',
      },
    ],
    v1 = [
      {
        alias: null,
        args: [
          {
            kind: 'Variable',
            name: 'limit',
            variableName: 'limit',
          },
        ],
        concreteType: 'Launch',
        kind: 'LinkedField',
        name: 'launchesPast',
        plural: true,
        selections: [
          {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'id',
            storageKey: null,
          },
        ],
        storageKey: null,
      },
    ]
  return {
    fragment: {
      argumentDefinitions: v0 /*: any*/,
      kind: 'Fragment',
      metadata: null,
      name: 'pages_listFilmsQuery',
      selections: v1 /*: any*/,
      type: 'Query',
      abstractKey: null,
    },
    kind: 'Request',
    operation: {
      argumentDefinitions: v0 /*: any*/,
      kind: 'Operation',
      name: 'pages_listFilmsQuery',
      selections: v1 /*: any*/,
    },
    params: {
      cacheID: '57ed756ef1f8f8141bf85f2c21f7e53b',
      id: null,
      metadata: {},
      name: 'pages_listFilmsQuery',
      operationKind: 'query',
      text: 'query pages_listFilmsQuery(\n  $limit: Int = 10\n) {\n  launchesPast(limit: $limit) {\n    id\n  }\n}\n',
    },
  }
})()

;(node as any).hash = '5037632b60680f71d34a046139f75f2a'

export default node
