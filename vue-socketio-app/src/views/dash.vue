<template>
<div class="dash container">
    <div class="grid rounded-3 shadow" @click="moveRobotToMouse">
        <div class="robot"></div>
    </div>
</div>
</template>

<script>
export default {
    name: 'DashPage',
    data() {

    },
    mounted() {
        this.moveRobot();
    },
    methods: {
        moveRobot() {
            // Generate random positions within the grid
            const left = Math.random() * 100 + '%';
            const top = Math.random() * 100 + '%';

            // Update the robot position
            this.robotPosition = { left, top };

            // Apply the new position to the robot element
            const robot = document.querySelector('.robot');
            if (robot) {
                robot.style.left = this.robotPosition.left;
                robot.style.top = this.robotPosition.top;
            }

            // Move the robot again after a delay
            setTimeout(this.moveRobot, 2000); // Move every 2 seconds
        },
        moveRobotToMouse(event) {
            // Calculate the position relative to the grid
            const grid = event.currentTarget;
            const rect = grid.getBoundingClientRect();
            const left = ((event.clientX - rect.left) / rect.width) * 100 + '%';
            const top = ((event.clientY - rect.top) / rect.height) * 100 + '%';

            // Update the robot position
            this.robotPosition = { left, top };

            // Apply the new position to the robot element
            const robot = document.querySelector('.robot');
            robot.style.left = this.robotPosition.left;
            robot.style.top = this.robotPosition.top;
        }
    },
    unmounted() {
        clearTimeout(this.moveRobot);
    }
};
</script>

<style>
.grid {
  height: 75vh;
  width: auto;
  background-image: radial-gradient(#000000 2px, transparent 2px);
  background-size: 42px 42px;
  background-color: #FFFFFF;
  position: relative;
}

.robot {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: #000000;
  transform-origin: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transition: transform 0.5s ease, left 0.5s ease, top 0.5s ease;
}
</style>