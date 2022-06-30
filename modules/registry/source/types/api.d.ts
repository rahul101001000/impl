// source/types/api.d.ts
// The type definitions for the project.

/**
 * The ID of ... anything, really.
 */
export declare type Did = string

/**
 * The context for a verifiable credential/presentation.
 */
export declare type Context = string[]

/**
 * The issuer-mentioned type of presentation/credential.
 */
export declare type PresentationType = 'VerifiablePresentation' | string[]
export declare type CredentialType = 'VerifiableCredential' | string[]

/**
 * The date and time of an event in ISO 8601 format.
 */
export declare type IsoDateTime = string

/**
 * The proof of signature.
 */
export declare type Proof = {
	type: 'RsaSignature2018' | 'Ed25519Signature2018' | 'Ed25519Signature2020'
	created: IsoDateTime
	proofPurpose: 'authentication' | 'assertionMethod'
	verificationMethod: Did
	challenge?: string
	domain?: string
	jws: string
}

/**
 * A verifiable credential.
 */
export declare interface Credential {
	id: Did
	'@context': Context
	type: CredentialType
	issuer: Did
	issuanceDate: IsoDateTime
	credentialSubject: Record<string, unknown>
	proof: Proof

	// The credential could also be extended by providing more `context`.
	[x: string]: unknown // eslint-disable-line @typescript-eslint/member-ordering
}

/**
 * A verifiable presentation.
 */
export declare interface Presentation {
	id: Did
	'@context': Context
	type: PresentationType
	verifiableCredential: Credential[]
	proof: Proof

	// The presentation could also be extended by providing more `context`.
	[x: string]: unknown // eslint-disable-line @typescript-eslint/member-ordering
}

/**
 * The payload required to create a `Presentation`.
 */
export declare type PresentationDto = Presentation
