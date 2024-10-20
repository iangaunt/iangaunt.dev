import BlogBack from "@/components/BlogBack";
import Codeblock from "@/components/Codeblock";
import Navbar from "@/components/Navbar";
import Template from "@/pages/template";

import styles from "@/styles/article.module.css"

export default function Blog() {
    return (
        <>
            <Navbar></Navbar>
            <main className={styles.main}>
                <Template>
                    <div className={styles.container}>
                        <BlogBack></BlogBack>
                        <h1>→ <span>[10.11.24]</span> designing a chip8 cpu</h1>
                        <p>
                            Over the last couple of weeks I've been designing an emulator for a chip8 chip, which is a 
                            pretty old piece of hardware that was designed to run tiny Atari games like Pong and Tetris. 
                            I've found out that opcodes are quite fascinating pieces of computer programming and memory
                            management can be ridiculously complex, and the chip8 only has a few thousand bytes of RAM.
                        </p>
                        <Codeblock 
                        code='#include "headers/chip8.h" \n
                        using std::cout; \n
                        using std::endl; \n
                        \n
                        int main(int argv, char** args) { \n
                            \t chip8* c8 = new chip8(); \n
                            \t c8->setup_graphics(); \n
                            \t c8->load_rom("src/roms/pong.ch8"); \n
                            \n
                            \t bool quit = false; \n
                            \t int count = 0; \n
                            \n
                            \t auto cycle_delay = 2; \n
                            \t auto last_cycle = std::chrono::high_resolution_clock::now(); \n
                            \n
                            \t while (c8->running && !quit) { \n
                                \t \t quit = c8->fetch_input(); \n
                                \n
                                \t \t auto current = std::chrono::high_resolution_clock::now(); \n
                                \t \t float delay = std::chrono::duration<float, std::chrono::milliseconds::period>(current - last_cycle).count(); \n
                                \n 
                                \t \t if (delay > cycle_delay) { \n
                                    \t \t \t c8->emulate_cycle(); \n
                                    \n
                                    \t \t \t if (c8->draw_flag) { \n
                                        \t \t \t \t c8->update_graphics(c8->gfx, sizeof(c8->gfx[0]) * 64); \n
                                    \t \t \t } \n
                                    \t \t \t last_cycle = current; \n
                                \t \t } \n
                            \t } \n
                            \n
                            \t c8->end_graphics(); \n
                            \n
                            \t return 0; \n
                        }' language="cpp"></Codeblock>
                        <p>
                            This is my game loop for the chip8 cpu. I essentially pause for a small 
                            amount of time before fetching the next instruction in memory, which
                            are colloquially referred to as "opcodes". Each opcode tells the computer
                            to move, alter, or duplicate values in the memory buffer.
                        </p>
                        <h2>Subheader</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum, purus id hendrerit scelerisque, velit urna viverra ligula, at placerat lectus neque vel urna. Sed non efficitur felis, in volutpat velit. Nulla facilisi. Nulla facilisi. Sed non efficitur felis, in volutpat velit.</p>
                    </div>  
                </Template>
            </main>
        </>
    )
}