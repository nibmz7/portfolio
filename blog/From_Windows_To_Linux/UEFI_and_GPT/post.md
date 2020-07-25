


> **DISCLAIMER**: THIS POST IS WRITTEN BY A COMPLETE NOVICE. INFORMATION STATED MAY BE INACCURATE AND IF SO, FEEL FREE TO CORRECT ANY MISTAKES.  
> **RESEARCH TOPIC**: UEFI & GPT.  
> **WHAT PROMPTED THIS?**: After interacting with the BIOS screen and GRUB menu, I started wondering what they are.

## BIOS & MBR
Before we begin, you might want to take a look at this excellent article on legacy BIOS/MBR to have a bit of context: [MBR BOOT PROCESS.](https://neosmart.net/wiki/mbr-boot-process/)

# UEFI
![EFI diagram](https://raw.githubusercontent.com/nibmz7/nibmz7.github.io/master/blog/From_Windows_To_Linux/UEFI_and_GPT/assets/efi.webp)
> [Courtesy of UEFI on Wikipedia](https://en.wikipedia.org/wiki/Unified_Extensible_Firmware_Interface) 
- “The Unified Extensible Firmware Interface (UEFI) is a specification that defines a software interface between an operating system and platform firmware, replacing the legacy Basic Input/Output System (BIOS) firmware interface.” 

- There’s embedded software in your computer also known as firmware. This platform firmware checks and ensures the hardwares (cpu, memory, input-output devices etc) are initialized and ready to be used for bootup. The UEFI specification only requires the firmware to create the standardized interfaces and does not state how the underlying interfaces should be implemented so it is up to the vendor to execute that bit. There is an open source firmware implementation of UEFI called [TianaCore](https://github.com/tianocore/tianocore.github.io/wiki/UEFI-EDKII-Learning-Dev).
> You may still come across the ‘BIOS’ setup utility screen, which is essentially the firmware settings. The term ‘BIOS’ is still used although your firmware is built for UEFI. Is this because BIOS is recognized amongst consumers for access to firmware settings that it became a noun? Can anyone clarify.


![UEFI conceptual overview](https://raw.githubusercontent.com/nibmz7/nibmz7.github.io/master/blog/From_Windows_To_Linux/UEFI_and_GPT/assets/uefi_diagram.webp)
> Diagram from [UEFI Forum](https://uefi.org/specifications)


![uefi boot manager NVRAM entries](https://raw.githubusercontent.com/nibmz7/nibmz7.github.io/master/blog/From_Windows_To_Linux/UEFI_and_GPT/assets/cli_efibootmgr.webp)
> **‘efibootmanger -v’** command output showing the NVMRAM entries
- The platform firmware is responsible for setting up the UEFI protocols and services before starting what is called the **UEFI boot manager.** The UEFI boot manager will attempt to load the OS boot loaders in order according to globally defined NVRAM variables. You can view the boot order sequence variables in your **‘BIOS setup utility settings’** or using **‘efibootmanger -v’** on linux.

- The OS loader is a special type of UEFI application (e.g. grubx64.efi) that utilizes the protocols and services provided by the UEFI layer to boot the chosen operating system. Once the OS loader has successfully launched the OS, it will call EFI_BOOT_SERVICES.ExitBootServices(), which will terminate all boot services in the system, including memory management, and the UEFI OS loader is responsible for the continued operation of the system. After control is passed to the operating system, only the runtime services will remain as part of the UEFI layer.

![uefi runtime services part 1](https://raw.githubusercontent.com/nibmz7/nibmz7.github.io/master/blog/From_Windows_To_Linux/UEFI_and_GPT/assets/uefi_runtime_services_1.webp)![uefi runtime services part 2](https://raw.githubusercontent.com/nibmz7/nibmz7.github.io/master/blog/From_Windows_To_Linux/UEFI_and_GPT/assets/uefi_runtime_services_2.webp)
> List of UEFI runtime services from [UEFI Forum](https://uefi.org/specifications)

# GPT
- Like MBR, GUID Partition Table (GPT) is a partitioning scheme which describes how partitions are laid out on a storage device. GPT is now the preferred way to partition a storage device and is used mainly for the UEFI boot, instead of MBR.
- Let’s first take a look at the layout of a storage device using the GPT scheme. 
<p align="center">
	<img src="https://raw.githubusercontent.com/nibmz7/nibmz7.github.io/master/blog/From_Windows_To_Linux/UEFI_and_GPT/assets/gpt_scheme.webp" alt="GPT Scheme"> </img>
</p>

> [GPT on Wikipedia](https://en.wikipedia.org/wiki/GUID_Partition_Table)

### Logical Block Addressing (LBA)
If you would like to know a bit about LBA and how it relates to data being represented in the media, you may want to check these out.
- #### HDD - Hard Disk Drive
	- [Cylinder Head Sector (CHS)](https://en.wikipedia.org/wiki/Cylinder-head-sector)
	- [Hard Disks, Sectors, Zone Bit Recording, Sectors vs Blocks, CHS, LBA, Sparing - Youtube](https://youtu.be/Cj8-WNjaGuM)
- #### SSD - Solid State Drive
	- [Understanding Flash: What Is NAND Flash?](https://flashdba.com/2014/06/06/understanding-flash-what-is-nand-flash/)
	- [Understanding Flash: Blocks, Pages and Program / Erases](https://flashdba.com/2014/06/20/understanding-flash-blocks-pages-and-program-erases/)
	- [Understanding Flash: The Flash Translation Layer](https://flashdba.com/2014/09/17/understanding-flash-the-flash-translation-layer/)

#### GPT Header Format
![gpt header format](https://raw.githubusercontent.com/nibmz7/nibmz7.github.io/master/blog/From_Windows_To_Linux/UEFI_and_GPT/assets/table_header_format.webp)
> **0x50** indicates the maximum number of possible partitions. Although this can be unlimited, it’s usually set at 128 partitions.
#### GPT Partition Entry Format
![gpt partition entry format](https://raw.githubusercontent.com/nibmz7/nibmz7.github.io/master/blog/From_Windows_To_Linux/UEFI_and_GPT/assets/partition_entry_format.webp)
> The partition type ID is globally unique. You may view the list of types [here](https://en.wikipedia.org/wiki/GUID_Partition_Table#Partition_Type_GUIDs).
#### UEFI and GPT
- For UEFI to work, it looks for a special partition known as the **‘EFI System Partition’** which must be formatted based on the **FAT filesystem** (MacOS is an exception). The EFI Boot Manager can interpret FAT filesystem and it is this partition where the EFI Boot Manager searches for EFI boot loaders. Here is an example of the contents in an 'EFI System Partition'.

![efi partition contents](https://raw.githubusercontent.com/nibmz7/nibmz7.github.io/master/blog/From_Windows_To_Linux/UEFI_and_GPT/assets/cli_efi_partition.webp)
> **/EFI/boot/bootx64.efi** is the fallback path for the boot manager if there are no NVRAM entries saved for that storage media. This is particularly useful say if you want to create a bootable UBUNTU flash drive. You can partition the usb drive according to GPT, create the ‘EFI system partition’ and format it based on FAT32 and then insert grubx64.efi into the ‘EFI/boot/’ folder and rename it to ‘bootx64.efi’. That way when you insert the usb stick into your computer, the EFI boot manager will launch grub under the disguise of bootx64.efi.

#### Extras
- Partitions on a laptop with SSD dual-booting Windows and Ubuntu  
![blkid command output](https://raw.githubusercontent.com/nibmz7/nibmz7.github.io/master/blog/From_Windows_To_Linux/UEFI_and_GPT/assets/cli_blkid.webp)  
> [What is UUID, PARTUUID and PTUUID?](https://unix.stackexchange.com/a/463410/421388)
- `fdisk -l` command output  
![fdisk -l command output](https://raw.githubusercontent.com/nibmz7/nibmz7.github.io/master/blog/From_Windows_To_Linux/UEFI_and_GPT/assets/cli_fdisk.webp)

- If you need a better explanation or you’re wondering how to boot multiple distros, you can take a look at the following:
	- [UEFI and GPT](https://wiki.restarters.net/UEFI_and_GPT)
	- [Hands-On: Linux UEFI multi-boot](https://www.zdnet.com/article/hands-on-linux-uefi-multi-boot-my-way/)
	- [Hands-On: Linux UEFI multi-boot II](https://www.zdnet.com/article/hands-on-linux-uefi-multi-boot-part-2/)
	- [Linux on your laptop: Here's what you need to know about UEFI firmware](https://www.zdnet.com/article/linux-on-your-laptop-heres-what-you-need-to-know-about-uefi-firmware/)


