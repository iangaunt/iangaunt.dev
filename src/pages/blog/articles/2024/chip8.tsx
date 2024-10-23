import BlogBack from "@/components/BlogBack";
import Codeblock from "@/components/Codeblock";
import Navbar from "@/components/Navbar";
import Template from "@/pages/template";

import styles from "@/styles/article.module.css"

export default function Chip8() {
    return (
        <>
            <div className={styles.bg}></div>
            <Navbar></Navbar>
            <main className={styles.main}>
                <Template >
                    <div className={styles.container}>
                        <BlogBack></BlogBack>
                        <h1>→ <span>[10.21.24]</span> designing a chip8 cpu</h1>
                        <p>
                            Over the last couple of weeks I've been designing an emulator for a chip8 chip, which is a 
                            pretty old piece of hardware that was designed to run tiny Atari games like Pong and Tetris. 
                            I've found out that opcodes are quite fascinating pieces of computer programming and memory
                            management can be ridiculously complex, even though the chip8 only has a few thousand bytes of RAM.
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
                        <p>
                            For the graphics, I use SDL2, which is a C++ library that wraps up OpenGL into
                            an easy out-of-the-box framework. I've used OpenGL on some previous projects, like
                            Minecraft modding and ground-up GPU sourcing, but here it made life much easier for
                            reading the texture to the screen.
                        </p>

                        <h2>Code Snippets & Such</h2>
                        <p>
                            The chip8 has about 35 different opcodes, all of which are pretty easy to implement.
                            I read the ROM file as a series of bytes and then use bit shifting to check for their
                            specific conditions and values. Each opcode header does something different, so I need
                            to have a case for each split in logic.
                            <br></br><br></br>
                            I could do this with a function table, but the small number of opcodes made it fairly
                            easy to implement as a switch statement.
                        </p>
                        <p>
                            Here's a snippet of the code below:
                        </p>
                        <Codeblock
                        code="
                        void chip8::emulate_cycle() { \n
                        \t short opcode = fetch_opcode(static_cast<int>(prog_counter)); \n
                        \t prog_counter += 2; \n
                        \t draw_flag = false; \n
                        \n
                        \t switch (opcode & 0xF000) { \n
                            \t \t case 0x1000: { \n
                                \t \t \t prog_counter = opcode & 0x0FFF; \n
                                \t \t \t break; \n
                            \t \t } \n
                            \n
                            \t \t case 0x2000: { \n
                                \t \t \t stack[stack_pointer] = prog_counter; \n
                                \t \t \t ++stack_pointer; \n
                                \t \t \t prog_counter = opcode & 0x0FFF; \n
                                \t \t \t break; \n
                            \t \t }   \n
                            \n
                            \t /* This keeps going until all 35 opcodes are implemented... */ \n
                            }
                        " language="cpp"></Codeblock>
                        <p>
                            Much of my time on this project was devoted to testing opcodes, since memory management
                            would completely fall apart if I didn't make sure every single one worked as intended.
                            The second hardest part was just linking up the graphics library -- I kept forgetting the 
                            SDL2 .dll file and my program wouldn't compile. :(
                        </p>
                        <p>
                            The most fascinating part of the chip8 is how the graphics are read. I found out that SDL2 has
                            the capacity of passing in an array of integer values which are then bitmasked into color values,
                            which allowed me to add custom color values to my display.
                        </p>
                        <Codeblock code="
                        void chip8::update_graphics(const void* buffer, int pitch) { \n
                        \t unsigned int pixels[2048]; \n
                        \n
                        \t for (int i = 0; i < 2048; ++i) { \n
                            \t \t unsigned int pixel = gfx[i]; \n
                            \t \t pixels[i] = (0x00FFFFFF * pixel) | 0xFF000000; \n
                            \t \t pixels[i] = (pixels[i] == 0xFF000000 ? 0xFFB7C4A3 : 0x1E211A); \n
                        \t } \n
                        \n
                        \t SDL_UpdateTexture(texture, nullptr, pixels, 64 * sizeof(unsigned int)); \n
                        \t SDL_RenderClear(renderer); \n
                        \t SDL_RenderCopy(renderer, texture, nullptr, nullptr); \n
                        \t SDL_RenderPresent(renderer); \n
                        }
                        " language="cpp"></Codeblock>
                        <p>
                            This allowed me to bypass having to do all of the VAO and VBO stuff that OpenGL forces you to
                            do even for reading straight from an array 3 numbers long. It compelled me to pick up the pixels-to-image 
                            idea and apply it to a version of Conway's game of life you can find here.
                        </p>

                        <h2>Where Now?</h2>
                        <p>
                            I currently am working on a GameBoy emulator on the side that will probably be my winter project, since it
                            is significantly more complex (having over 500 different opcodes and different ways of reading VRAM). However,
                            the chip8 was a great starter project and introduced me to lots of CPU concepts like the stack and memory buffering.
                            I would highly suggest figuring out how to build one from scratch if you can, and then moving
                            onto another CPU if you want to get into emulation.
                        </p>

                        <footer>Happy coding! :) <a href="#top">(↑ back to top)</a></footer>
                    </div>  
                </Template>
            </main>
        </>
    )
}