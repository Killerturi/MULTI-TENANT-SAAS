import Task from "./task.model.js";

/* OWNER / ADMIN */
export const createTask = async (req, res) => {
    const task = await Task.create({
        tenantId: req.tenantId,
        projectId: req.body.projectId,
        title: req.body.title,
        description: req.body.description,
        assignedTo: req.body.assignedTo
    });

    res.status(201).json(task);
};

/* Everyone */
export const getTasks = async (req, res) => {
    const tasks = await Task.find({
        tenantId: req.tenantId,
        projectId: req.params.projectId
    });

    res.json(tasks);
};

/* MEMBER can update ONLY assigned task */
export const updateTaskStatus = async (req, res) => {
    const task = await Task.findOne({
        _id: req.params.taskId,
        tenantId: req.tenantId
    });

    if (!task)
        return res.status(404).json({ message: "Task not found" });

    // 🔐 SECURITY CHECK
    if (
        req.user.role === "MEMBER" &&
        task.assignedTo.toString() !== req.user.userId
    ) {
        return res.status(403).json({ message: "Not your task" });
    }

    task.status = req.body.status;
    task.updatedBy = req.user.userId;
    await task.save();

    res.json(task);
};
