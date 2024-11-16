# CommonGround

## Decentralized public goods crowdfunding platform for mass adoption

### Introduction

CommonGround is a decentralized crowdfunding platform especially designed for public goods, catering to both web2 and web3 users. Through providing an AI-native user experience, it aims to make decentralized public goods crowdfunding more accessible and easier to understand. 

Combined with Web2 user experience and Web3 decentralized infrastructure, CommonGround resolves the lack of trust issues while enabling smoother onboarding for users from both web2 and web3 communities.

### Architecture

#### Roles

* **Contributor**: A contributor is a user who contributes to a public good. Contributors can contribute to a project by providing funds, ideas, or other resources, and receives the corresponding benefits of the public good.

* **Initiator**: An initiator is a user who initiates a project. Initiator can quickly create a public good project on CommonGround with the help of AI, sets the perks (both rights and obligations for contributors) and milestones, and manages the project. When the project achieves certain milestones, it will receive fundings from the contributors accordingly.

* **Evaluator**: An evaluator is a user who evaluates a project. Users must stake a certain amount of tokens to become an evaluator. As evaluators, users within the network can set up an AI Agent inside TEE (Trusted Execution Environment) to evaluate whether the project has achieved the milestones and distribute the fundings accordingly. Evaluators can earn yield from staking and evaluating, meanwhile face the risk of slashing when evaluate incorrectly or maliciously.

#### Integrations

* Polygon POS: The mainnet of CommonGround.
* Phala Network: The TEE provider of AI Agents network within CommonGround.
* NounsDAO: Nouns art UI integration.
* Sign Protocol (in development): For attestation of contributors' perks and initiators' achievements (most likely will be unstructured, off-chain events), we would like to integrate Sign Protocol to provide a secure and decentralized way to attest the events.
* Celo (in development): The second user-centric EVM chain that will be onboarded to CommonGround.
* Biconomy (in development): For gasless transactions and smart session keys, we will integrate Biconomy's SDKs.

### Goals & Future development

1. Complete integrations in CommonGround MVP.
2. Launch the first project on CommonGround.
3. Onboard more contributors and initiators from both web2 and web3 communities to CommonGround.
4. Integrate more TEE providers to expand the decentralized AI Agents network.
5. Make CommonGround the leading crowdfunding platform for public goods.

### Other sources
