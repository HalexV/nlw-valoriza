import { EntityRepository, Repository } from "typeorm";
import { Tag } from "../entities/Tag";

// o EntityRepository é o decorator utilizado para linkar o repositório com a entidade
// o Repository é utilizado para prover as funcionalidades padrões do repository do typeorm para a nossa classe (custom repository) através do extends. Classe herdando o Repository.

@EntityRepository(Tag)
class TagsRepositories extends Repository<Tag> {}

export { TagsRepositories };
