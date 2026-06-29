class BaseRepository {

    constructor(model){

        this.model=model;

    }

    async create(data){

        return this.model.create(data);

    }

    async findById(id){

        return this.model.findById(id);

    }

    async find(query={}){

        return this.model.find(query);

    }

    async update(id,data){

        return this.model.findByIdAndUpdate(

            id,

            data,

            {

                new:true,

                runValidators:true

            }

        );

    }

    async delete(id){

        return this.model.findByIdAndDelete(id);

    }

}

export default BaseRepository;