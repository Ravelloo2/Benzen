const Course = require("./courses.model");

class CourseService {

    async create(data) {
        try {
            const course = new Course({
                name: body.name,
                teacherId: body.teacherId,
                length: body.length,
                description: body.description
            })
            await course.save();
            return {success: true, body: course}
        } catch (error) {
            return {success: false, error: error}
        }
    }

    async findAll() {
        try {
            const course = await Course.findAll();
            return {success: true, body: course}
        } catch (error) {
            return {success: false, error: error}
        }
    }

    async findOne(id) {
        try {
            const query = {_id: id}
            const course = await Course.findOne(query);
            return {success: true, body: course}
        } catch (error) {
            return {success: false, error: error}
        }
    }

    async update(id, body) {
        try {
            const query = {_id: id}
            const course = await Course.findOne(query);
            if(body.name){
                course.name = body.name;
            }
            if(body.teacherId) {
                course.teacherId = body.teacherId;
            }
            if(body.length) {
                course.length = body.length;
            }
            if(body.description) {
                course.description = body.description;
            }
            await course.save();
            return {success: true, body: course}
        } catch (error) {
            return {success: false, error: error}
        }
    }

    async deleteOne(id) {
        try {
            const query = {_id: id}
            await Course.deleteOne(query)
            return {success: true}
        } catch (error) {
            return {success: false, error: error}
        }
    }
}
module.exports = CourseService;